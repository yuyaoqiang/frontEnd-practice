import Stack from "./stack.js"
import {getPath,changePage} from "../util/utils.js"
class Navigation {
		constructor(config) {
		this.stack = new Stack();
		this.config = config;
	}

		static	getInstance(config){
				if(!this.instance){
						if(!config) throw Error("缺少配置文件");
						this.instance = new Navigation(config);
				}
				return this.instance;
		}
		
		init(){
				const path = getPath();
				this.go(path);
		}

		go(path){
				const { component } = this.config[path];
				const page = new component('#container');
				this.stack.push(page);
				page.render('in');
				window.wx = page;
		}

		back(){
				const node = this.stack.pop();
				const page = this.stack.getStackTop();
				node.destory('out');
				window.wx = page;
		}

		isHas(path){
				let has = false;
				this.stack.hasEqual((stack) => {
						const index = Object.keys(stack).findIndex(s => stack[s].path === path);
						has = index === -1 ? false : true;
				})
				return has;
		}
}

export default Navigation;