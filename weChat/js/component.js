import docUtils from "../util/docUtils.js";
class Component {
		constructor(parent) {
				this.parent = document.querySelector(parent);
				this.state = {};
				this.template = undefined;
		}

		compile(templateId,states) {
				this.template = template(templateId,states);
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

		render(animationIn) {
				let node = docUtils.createDom(this.template);
				if (animationIn) {
						const classas = node.getAttribute("class");
						node.setAttribute("class", `${classas} in-animation`);
						this.parent.appendChild(node);
				} else {
						this.parent.appendChild(node);
				}
				this.bindClickEvents(node);
		}
}

export default Component;