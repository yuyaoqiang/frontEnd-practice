import docUtils from "../util/docUtils.js";
class Component {
		constructor({parent,next,before}) {
				this.parent = document.querySelector(parent);
				this.state = {};
				this.next=next,
				this.before=before,
				this.template = '';
		}

		compile() {
				this.template = template(this.path, this.state);
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
				 const nodes = node.getElementsByClassName('next');
				 console.log(nodes)
				if (animationIn) {
						const classas = node.getAttribute("class");
						node.setAttribute("class", `${classas} in-animation`);
						this.parent.appendChild(node);
				} else {
						this.parent.appendChild(node);
				}
				// this.bindEvents();
		}

		nextPage() {
    		window.location.hash = this.next;
		};

		beforePage(){
				window.location.hash = this.before;
		}

		bindEvents(){
				if(this.next) this.nextPage();
				if(this.before) this.beforePage()
		}
}

export default Component;