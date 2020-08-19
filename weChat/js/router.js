
import templates from "./templates.js"
import routerConfig from "./routerConfig.js"
import Stack from "./stack.js";
import Page from "./page.js";
import observer from "./observer.js";

class Router {
  constructor() {
    this.stack = Stack.getStackInstance();
  }

  // 路由中是否已存在
  hasPathByStack() {
    let path = this.getPath();
    let stacks = this.stack.getStacks();
    const index = stacks.findIndex(stack => stack.path === path)
    return index === -1 ? false : true;
  }

  // 获取当前页面
  getPage() {
    let page = null;
    let path = this.getPath();
    routerConfig.map(route => {
      if (route.path === path) {
        let templatePage = templates[route.key];
        page = new Page(route.path, route.title, templatePage);
      }
    })
    return page;
  }

  // 当前Path
  getPath() {
    return window.location.hash.slice(1) || 'index';
  }

  //第一次初始化页面
  fristInitPage() {
    if (this.stack.len > 0) return;
    let page = this.getPage();
    this.stack.push(page);
    page.renderPage();
  }

  // 初始化
  init() {
    this.fristInitPage();
    this.addObserver();
  }

  addObserver() {
    window.onpopstate = () => {
      const has = this.hasPathByStack();
      if (has) {
        observer.publish("back");
      } else {
        observer.publish("go");

      }
    };

    observer.addListener("go", () => {
      let page = this.getPage();
      this.stack.push(page)
      page.renderPage();
    });

    observer.addListener("back", () => {
      let page = this.stack.pop();
      page.destroyPage();
    });
  }
}
const router = new Router();
export default router;