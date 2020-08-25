import Component from "../js/component.js"
class Info extends Component {
    constructor(parent) {
        super(parent);
        this.template = `<div class="page chat-page" id="groupInfo">
        <header>
          <ul class="info-header">
            <li onclick="nextPage('chat')">
              <span class="icon iconfont icon-zuo"></span>
            </li>
            <li>聊天信息(345)</li>
            <li></li>
          </ul>
        </header>
        <main class="chat-main-wrap group-imgs-wrap" id="chat-main-wrap">
          <ul>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <li>
              <span class="user-icon">
                <img src="./icon/WechatIMG7.jpeg" alt="" /> </span
              ><span class="user-name">好友1</span>
            </li>
            <p class="more-member">查看更多群成员</p>
          </ul>
          <section class="group-info">
            <article>
              <p>群聊名称</p>
              <p>
                <span>我的群名字</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>群二维码</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>群公告</p>
              <p>
                <span>我的群公告</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>备注</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>查找聊天内容</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>我在本群的昵称</p>
              <p>
                <span>这波能反杀</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>设置当前聊天背景</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>投诉</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
        
          <section class="group-info">
            <article class="exit-clear">清空聊天记录</article>
            <article  class="exit-clear">删除并推出</article>
          </section>
        </main>
        </div>`
    }

}
export default Info