// 栈管理
class Router {

  constructor(page, react) {
    this.len = 0; //栈长度
    this.stack = {}; //栈
    this.urlMap = new Map(); //url映射关系
    this.react = react;
    this.init(page);
  }

  static getRouterInstance(page, react) {
    if (!this.instance) {
      this.instance = new Router(page, react);
    }
    return this.instance;
  }

  // 初始化
  init(page) {
    this.clean();
    this.push(page);
  }

  // 栈顶
  getStackTop() {
    return this.stack[this.len];
  }

  // 进栈
  push(page) {
    this.len += 1;
    this.stack[this.len] = page;
    this.urlMap.set(page.url, this.len);
    const stackTopData = this.getStackTop();
    this.react.render(stackTopData, "in", null);
  }

  // 出栈
  pop() {
    const beforeData = this.getStackTop();
    this.urlMap.delete(beforeData.url);
    delete this.stack[this.len];
    this.len -= 1;
    const cureentData = this.getStackTop();
    this.react.render(cureentData, "out", beforeData);
  }

  //销毁
  clean() {
    this.len = 0;
    this.stack = {};
    this.urlMap.clear();
  }

}

export default Router;