import Component from "../js/component.js"
class Info extends Component {
    constructor(parent) {
        super(parent);
        this.path = 'info';
        this.title = "聊天信息(345)"
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
				this.compile();
		}
}

export default Info