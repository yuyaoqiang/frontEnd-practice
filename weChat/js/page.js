
import Component from "./component.js"
class Page extends Component {
    constructor(path, title, tepmlate) {
        super();
        this.path = path;
        this.title = title;
        this.tepmlate = tepmlate
    }

    renderPage() {
        super.render({ tepmlate: this.tepmlate, path: this.path })
    }

    destroyPage() {
        super.render({ tepmlate: this.tepmlate, path: this.path, leave: true })
    }
}
export default Page;