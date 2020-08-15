class DomManagement {

  constructor() {
    if (!DomManagement.instance) {
      DomManagement.instance = this;
    }
    return DomManagement.instance;
  }

  // 创建DOM
  createDom(templateStr) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(templateStr, "text/html");
    let dom = doc.querySelector(".page");
    return dom;
  }

  // 查询DOM
  query(id) {
    return document.getElementById(id) || false;
  }

  // 删除DOM
  delete(template) {
    if (!template) return;
    var parent = document.getElementById("container");
    setTimeout(() => {
      if (template != null) parent.removeChild(template);
    }, 700);
  }

  // 添加DOM
  appendChild(template) {
    let DOM = this.query("container");
    if (DOM) DOM.appendChild(template);
  }
}
export default DomManagement;