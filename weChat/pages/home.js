import Component from "../js/component.js"
import Navigator from "../js/navigation.js";
import { changePage } from "../util/utils.js";
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
    this.templateHTML=`
      <div class="page chat-page" id="home">
						<header>
						<ul class="info-header">
						<li></li>
						<li>{{ title }}</li>
						<li><span class="icon iconfont icon-icon-"></span></li>
						</ul>
						</header>
						<main class="chat-main-wrap" id="chat-main-wrap">
						<ul class="next">
						{{each list  value i}}
						<li class="row" onclick="wx.go()">
						<span class="user-icon"> <img src="./icon/icon.jpeg" alt="" /> </span
						><span class="user-name">{{value}}{{i}}</span>
						</li>
						{{/each}}
						</ul>
						</main>
						<footer>
						<ul class="chat-footer">
						<li>
						<span class="iconfont chat icon-cebianlan_liaotianliebiao"></span>
						<span class="zh-name chat">微信</span>
						</li>
						<li>
						<span class="icon iconfont icon-tongxunlu-copy"></span>
						<span class="zh-name">通讯录</span>
						</li>
						<li>
						<span class="icon iconfont icon-faxian"></span>
						<span class="zh-name">发现</span>
						</li>

						<li>
						<span class="iconfont icon-wo"></span>
						<span class="zh-name">我</span>
						</li>
						</ul>
						</footer>
						</div>
					`;
		}

go(){
history.push({state:'chat'},'聊天页','chat')
}

render(){
const template  = this.compile(this.templateHTML,this.state);
super.render('in',template);
}
} 
export default Home;