import Component from "../js/component.js"
class Chat extends Component {
		constructor(parent) {
				super(parent);
				this.path = 'chat';
				this.title = "闲聊群"
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
				this.compile();
		}
		bindClickEvents(){
				const nextNodes = this.parent.getElementsByClassName('next');
				const beforeNodes = this.parent.getElementsByClassName('before');
				if(beforeNodes.length>0){
						beforeNodes[0].addEventListener("click", ()=>{changePage(this.before)}, false)
				}
				//** 后期可优化 事件委派 */
				for(let i=0; i<nextNodes.length; i++){
						nextNodes[i].addEventListener("click", ()=>{changePage(this.next)}, false)
				}
		}
}
export default Chat;