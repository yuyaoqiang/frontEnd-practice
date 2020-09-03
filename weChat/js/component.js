import docUtils from "../util/docUtils.js";
class Component {
  constructor(parent) {
    this.parent = document.querySelector(parent);
  }

  compile(temp) {
    this.updateWillMount();
    const rendered = template.compile(temp)(this.state);
    this.append('in',rendered);
    this.updateWillMount();
  }

		componentDidMount() {

  }
  
		componentWillMount() {

  }
  
  updateWillMount(pre,next) {
  
  }

  updateDidMount(pre,next) {

  }

  setState() {

  }

  _render() {
    this.componentWillMount && this.componentWillMount();
    const temp = this.render();
    this.compile(temp);
    this.componentDidMount && this.componentDidMount();
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

  append(animation,template) {
    let node = docUtils.createDom(template);
    if (animation) {
      const classas = node.getAttribute("class");
      node.setAttribute("class", `${classas} in-animation`);
      this.parent.appendChild(node);
    } else {
      this.parent.appendChild(node);
				}
  }
}

export default Component;