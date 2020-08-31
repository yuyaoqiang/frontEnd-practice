import Component from "../js/component.js"
import Navigator from "../js/navigation.js";
import { changePage } from "../util/utils.js";
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
				this.templateHTML=`
						<div class="page chat-page chat-info-page" id="chat">
						<header>
										<ul class="info-header">
														<li class="before" onClick="wx.back()">
														<span class="icon iconfont icon-zuo"></span>
														</li>
														<li>{{title}}</li>
														<li class="next" onClick="wx.go()"> <span class="icon iconfont icon-elipsis"></span></li>
										</ul>
						</header>
						<main class="chat-main-wrap chats-info-wrap" id="chat-main-wrap">
										<ul>
												{{each list  item i}}
														<li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
																<p  class="user-msg-wrap"> <span >{{item.name}}</span><span >{{item.msg}}</span></p>
														</li>
												{{/each}}
										</ul>
						</main>
						<footer class="info-footer">
										<ul class="footer-inputer-wrap">
														<li><span class="icon iconfont icon-yuyin"></span></li>
														<li><input class="inputer-wrap"/></li>
														<li><span  class="icon iconfont icon-jia "></span></li>
														<li><span  class="icon iconfont icon-jia"></span></li>
										</ul>
										</footer>
						</div>
				`
				this.compile(this.templateHTML,this.state);
		}

		go(){
				history.push({state:'info'},'','info')
		}

		back(){
				history.myBack();
		}
}

export default Chat;