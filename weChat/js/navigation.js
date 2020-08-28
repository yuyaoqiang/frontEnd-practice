import Stack from "./stack.js"
import observer from "./observer.js";
import {getPath,changePage} from "../util/utils.js"
class Navigation {
		constructor(config) {
		this.stack = new Stack();
		this.observer = observer;
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
				this.addOnPopstate();
				this.addListeners();
				this.create(getPath());
		}

		create(path){
				const { component } = this.config[path];
				const page = new component('#container');
				this.stack.push(page);
				page.render('in');
		}

		delele(){
				const node = this.stack.pop();
				node.destory('out');
		}

		toDestination(currentPath){
				changePage(currentPath);
		}

		isHas(path){
				let has = false;
				this.stack.hasEqual((stack) => {
						const index = Object.keys(stack).findIndex(s => stack[s].path === path);
						has = index === -1 ? false : true;
				})
				return has;
		}

		addListeners(){
				this.observer.addListener("go", (path) => {
						this.create(path);
				});
				this.observer.addListener("back", () => {
						this.delele();
				});
		}

		addOnPopstate(){
				window.onpopstate = () => {
						const path = getPath();
						const has = this.isHas(path);
						if (has) {
								observer.publish("back");
						} else {
								observer.publish("go",path);
						}
				};
		}
}

export default Navigation;