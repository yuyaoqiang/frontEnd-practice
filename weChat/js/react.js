class React {
    constructor(domManage) {
        this.domManage = new domManage();
    }
    static getInstance(domManage) {
        if (!this.instance) {
            this.instance = new React(domManage);
        }
        return this.instance;
    }
    // 渲染
    render(page, direction, exitPage) {
        let template = this.domManage.createDom(page.htmlContent);
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
}
export default React;