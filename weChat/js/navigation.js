import Stack from "./stack.js"
class Navigation {
    constructor(config) {
        this.stack = new Stack();
        this.config = config;
		}
		
    go(currentPath) {
				const {component,...rest} = this.config[currentPath];
        const page = new component(
						{
							  parent:'#container',...rest
						}
				);
        page.render('in');
        this.stack.push(page);
    }

    back() {
        const node = this.stack.pop();
        node.destory('out');
		}
		
		// 栈中是否已存在
	  isHas = (path) => {
				let has = false;
				this.stack.hasEqual((stack) => {
						const index = Object.keys(stack).findIndex(s => stack[s].path === path);
						has = index === -1 ? false : true;
				})
		return has;
}
}

export default Navigation;