import Component from "../js/component.js"
class Home extends Component {
    constructor(parent) {
        super(parent);
        this.state = {
            title: "微信123",
        };
        this.path = 'home'
    }
}
export default Home;