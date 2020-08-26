import Component from "../js/component.js"
class Chat extends Component {
	constructor({parent,title,path,...rest}) {
        super({parent,...rest});
        this.path = path;
        this.state = {
            title,
            list: [
                { name: '波老师', msg: '1我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
                { name: '波老师', msg: '2我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
                { name: '波老师', msg: '3我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
                { name: '波老师', msg: '4我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
                { name: '波老师', msg: '5我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
                { name: '波老师', msg: '6我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },]
        };
        this.compile();
		}
}
export default Chat;