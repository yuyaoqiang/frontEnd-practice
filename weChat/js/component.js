import docUtils from "./docUtils.js";
class Component {
    constructor(parent) {
        this.parent = document.querySelector(parent);
        this.template = '';
        this.state = {};
    }

    compile() {
        this.template = template(this.path, this.state);
    }

    destory(animationOut) {
        const templateDom = this.parent.lastChild;
        if (animationOut) {
            templateDom.addEventListener("animationend", () => {
                this.parent.removeChild(templateDom)
            });
            const classas = templateDom.getAttribute("class");
            templateDom.setAttribute("class", `${classas} out-animation`);
        } else {
            this.parent.removeChild(templateDom)
        }
    }

    // 渲染
    render(animationIn) {
        let templateDom = docUtils.createDom(this.template);
        if (animationIn) {
            const classas = templateDom.getAttribute("class");
            templateDom.setAttribute("class", `${classas} in-animation`);
            this.parent.appendChild(templateDom)
        } else {
            this.parent.appendChild(templateDom)
        }
    }
}
export default Component;