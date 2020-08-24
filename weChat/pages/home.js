import Component from "../js/component.js"
class Home extends Component {
    constructor(parent) {
        super(parent);
        this.template = `<div class="page chat-page" id="index">
        <header>
            <ul class="info-header">
                <li></li>
                <li>微信</li>
                <li><span class="icon iconfont icon-icon-"></span></li>
            </ul>
        </header>
        <main class="chat-main-wrap" id="chat-main-wrap">
        <ul>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
                <li onclick="nextPage('chat')" class="row"> <span class="user-icon">  <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
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
      </div>`;
    }

}
export default Home;