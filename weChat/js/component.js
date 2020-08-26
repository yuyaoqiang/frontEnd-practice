import docUtils from "../util/docUtils.js";
import {changePage} from "../util/utils.js"
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
				this.bindEvents(node);
				if (animationIn) {
						const classas = node.getAttribute("class");
						node.setAttribute("class", `${classas} in-animation`);
						this.parent.appendChild(node);
				} else {
						this.parent.appendChild(node);
				}
		}

		bindEvents(parent){
				const nextNodes = parent.getElementsByClassName('next');
				const beforeNodes = parent.getElementsByClassName('before');
				for(let i=0; i<nextNodes.length; i++){
					nextNodes[i].addEventListener("click", ()=>{changePage(this.next)}, false)
				 }
				for(let i=0; i<beforeNodes.length; i++){
					beforeNodes[i].addEventListener("click", ()=>{changePage(this.before)}, false)
			 }
		}
}

export default Component;