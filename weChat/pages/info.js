import Component from "../js/component.js"
class Info extends Component {
	constructor({parent,title,path,...rest}) {
				super({parent,...rest});
				this.path = path;
				this.state = {
						title,
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