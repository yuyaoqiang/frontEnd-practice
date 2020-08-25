import Stack from "./stack.js"
import config from "./config.js"
class Navigation {
    constructor(config) {
        this.stack = new Stack();
        this.config = config;
    }
    static getInstance(config) {
        if (!this.instance) {
            this.instance = new Navigation(config);
        }
        return this.instance;
    }

    go(path) {
        const page = new this.config[path].component('#container');
        page.compile();
        page.render('in');
        this.stack.push({
            title: page.title,
            path,
            component: page,
        });
    }

    back() {
        const node = this.stack.pop();
        node.component.destory('out');
    }
}
const navigator = Navigation.getInstance(config);
export default navigator;