import Component from "../js/component.js"
class Home extends Component {
		constructor({parent,title,path,...rest}) {
				super({parent,...rest});
        this.path = path
        this.state = {
            title,
            list:[
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
                '这波能反杀',
            ]
				};
				this.compile();
    }
}
export default Home;