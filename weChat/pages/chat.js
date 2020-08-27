import Component from "../js/component.js"
import Navigator from "../js/navigation.js";
class Chat extends Component {
		constructor(parent) {
				super(parent);
				this.path = 'chat';
				this.title = "闲聊群"
				this.templateId="chat";
				this.state = {
						title: "闲聊群",
						list: [
								{ name: '波老师', msg: '1我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
								{ name: '波老师', msg: '2我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
								{ name: '波老师', msg: '3我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
								{ name: '波老师', msg: '4我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
								{ name: '波老师', msg: '5我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },
								{ name: '波老师', msg: '6我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息' },]
				};
				this.compile(this.templateId,this.state);
		}
		
		bindClickEvents(parent){
			  let navigator = 	Navigator.getInstance();
				const nextNodes = parent.getElementsByClassName('next');
				const beforeNodes = parent.getElementsByClassName('before');
				if(beforeNodes.length>0){
						beforeNodes[0].addEventListener("click", ()=>{navigator.toDestination('home')}, false)
				}
				for(let i=0; i<nextNodes.length; i++){
						nextNodes[i].addEventListener("click", ()=>{navigator.toDestination('info')}, false)
				}
		}
}
export default Chat;