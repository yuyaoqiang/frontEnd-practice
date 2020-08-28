import Component from "../js/component.js";
import Navigator from "../js/navigation.js";
class Info extends Component {
		constructor(parent) {
				super(parent);
				this.path = 'info';
				this.title = "聊天信息(345)"
				this.templateId="info";
				this.state = {
					title: "聊天信息(345)",
				list:[
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
						{userName:'不知非攻'},
				]
		};

		this.compile(this.templateId,this.state);
		}

		bindClickEvents(parent){
				let navigator = 	Navigator.getInstance();
				const beforeNodes = parent.getElementsByClassName('before');
				if(beforeNodes.length>0){
						beforeNodes[0].addEventListener("click", ()=>{navigator.toDestination('chat')}, false)
				}
	}
}

export default Info