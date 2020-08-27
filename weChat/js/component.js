import docUtils from "../util/docUtils.js";
class Component {
		constructor(parent) {
				this.parent = document.querySelector(parent);
				this.state = {};
				this.template = undefined;
		}

		compile() {
				this.template = template(this.path,this.state);
		}

		destory(animationOut) {
				let node = docUtils.queryLastChild(this.parent)
				if (animationOut) {
						node.addEventListener("animationend", () => {
								this.parent.removeChild(node);
						});
						const classas = node.getAttribute("class");
						node.setAttribute("class", `${classas} out-animation`);
				} else {
						this.parent.removeChild(node);
				}
		}

		// 渲染
		render(animationIn) {
				let node = docUtils.createDom(this.template);
				this.bindClickEvents(node);
				if (animationIn) {
						const classas = node.getAttribute("class");
						node.setAttribute("class", `${classas} in-animation`);
						this.parent.appendChild(node);
				} else {
						this.parent.appendChild(node);
				}
		}
}

export default Component;