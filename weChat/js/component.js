import docUtils from "./docUtils.js";
class Component {
    constructor(parent) {
        this.parent = document.querySelector(parent);
        this.template = '';
        this.state = {};
    }

    compile() {
        let templateHtml = template(this.path, this.state);
        this.template = docUtils.createDom(templateHtml);
    }

    destory(animationOut) {
        if (animationOut) {
            this.template.addEventListener("animationend", () => {
                this.parent.removeChild(this.template)
            });
            const classas = this.template.getAttribute("class");
            this.template.setAttribute("class", `${classas} out-animation`);
        } else {
            this.parent.removeChild(this.template)
        }
    }

    // 渲染
    render(animationIn) {
        if (animationIn) {
            const classas = this.template.getAttribute("class");
            this.template.setAttribute("class", `${classas} in-animation`);
            this.parent.appendChild(this.template)
        } else {
            this.parent.appendChild(this.template)
        }
    }
}
export default Component;