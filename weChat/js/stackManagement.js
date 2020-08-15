// 栈管理
class StackManagement {

  constructor(page, domManage) {
    this.len = 0; //栈长度
    this.stack = {}; //栈
    this.urlMap = new Map(); //url映射关系
    this.domManage = new domManage();
    this.init(page);
  }

  static getStackInstance(page, domManage) {
    if (!this.instance) {
      this.instance = new StackManagement(page, domManage);
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
    this.render(stackTopData, "in", null);
  }

  // 出栈
  pop() {
    const beforeData = this.getStackTop();
    this.urlMap.delete(beforeData.url);
    delete this.stack[this.len];
    this.len -= 1;
    const cureentData = this.getStackTop();
    this.render(cureentData, "out", beforeData);
  }

  // 渲染
  render(page, direction, exitPage) {
    let template = this.domManage.createDom(page.htmlContent);
    let DOM = this.domManage.query("container");
    if (exitPage) {
      var exitChild = document.querySelector(`#${exitPage.url}`);
      const className = exitChild.getAttribute("class");
      exitChild.setAttribute(
        "class",
        `${className.replace(exitPage["in"], exitPage["out"])}`
      );
      this.domManage.delete(exitChild);
    } else {
      const className = template.getAttribute("class");
      template.setAttribute("class", `${className} ${page[direction]}`);
      this.domManage.appendChild(template);
    }
  }

  //销毁
  clean() {
    this.len = 0;
    this.stack = {};
    this.urlMap.clear();
  }
}

export default StackManagement;