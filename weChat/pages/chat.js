import Component from "../js/component.js"
class Chat extends Component {
    constructor(parent) {
        super(parent);
        this.template = `<div class="page chat-page chat-info-page" id="chatInfo">
        <header>
            <ul class="info-header">
                <li onclick="nextPage('home')">
                <span class="icon iconfont icon-zuo"></span>
                </li>
                <li>闲聊群</li>
                <li onclick="nextPage('info')"> <span class="icon iconfont icon-elipsis"></span></li>
            </ul>
        </header>
        <main class="chat-main-wrap chats-info-wrap" id="chat-main-wrap">
            <ul>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
                <li class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                    <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                </li>
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
        </div>`
    }
}
export default Chat;