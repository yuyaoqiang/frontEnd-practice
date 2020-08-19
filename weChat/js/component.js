import reactDom from "./reactDom.js";
class Component {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Component();
        }
        return this.instance;
    }
    // 渲染
    render(page) {
        if (page.leave) {
            var exitChild = document.querySelector(`#${page.path}`);
            const className = exitChild.getAttribute("class");
            exitChild.setAttribute(
                "class",
                `${className.replace('in-animation', 'out-animation')}`
            );
            reactDom.delete(exitChild);
        } else {
            let template = reactDom.createDom(page.tepmlate);
            const className = template.getAttribute("class");
            template.setAttribute("class", `${className} in-animation`);
            reactDom.appendChild(template);
        }
    }
}
export default Component;