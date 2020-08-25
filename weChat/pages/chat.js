import Component from "../js/component.js"
class Chat extends Component {
    constructor(parent) {
        super(parent);
        this.path = 'chat';
        this.state = {
            title: "群聊",
        };
    }
}
export default Chat;