import Component from "../js/component.js"
import Navigator from "../js/navigation.js";
class Home extends Component {
		constructor(parent) {
				super(parent);
				this.path = 'home';
				this.title = "微信"
				this.templateId = "home";
				this.state = {
						title: "微信",
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
				this.compile(this.templateId,this.state);
		}
		
		bindClickEvents(parent){
				let navigator = 	Navigator.getInstance();
				const nextNodes = parent.getElementsByClassName('next');
				for(let i=0; i<nextNodes.length; i++){
						nextNodes[i].addEventListener("click", ()=>{navigator.toDestination('chat')}, false)
				}
		}
}
export default Home;