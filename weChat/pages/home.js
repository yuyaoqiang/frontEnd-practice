import Component from "../js/component.js"
class Home extends Component {
    constructor(parent) {
        super(parent);
        this.path = 'home'
        this.state = {
            title: "微信",
        };
    }
}
export default Home;