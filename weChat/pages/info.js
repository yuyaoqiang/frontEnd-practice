import Component from "../js/component.js"
class Info extends Component {
  constructor(parent) {
    super(parent);
    this.path = 'info'
    this.state = {
      title: "聊天信息(345)",
    };
  }
}
export default Info