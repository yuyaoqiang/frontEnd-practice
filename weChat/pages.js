const chatPage = {
    url: 'index',
    in: '',
    out: '',
    htmlContent: ` <div class="page chat-page" id="index">
                        <header>
                            <ul class="info-header">
                                <li></li>
                                <li>微信</li>
                                <li><span class="icon iconfont icon-icon-"></span></li>
                            </ul>
                        </header>
                    <article class="chat-main-wrap" id="chat-main-wrap">
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                            <p onclick="nextPage('chatInfo')" class="row"> <span class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </span><span class="user-name">好友1</span></p>
                    </article>
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
                </div>`,

}
const chatInfoPage = {
    url: 'chatInfo',
    in: 'in-animation',
    out: 'out-animation',
    htmlContent: `<div class="page chat-info-page" id="chatInfo">
                    <header>
                        <ul class="info-header">
                            <li onclick="nextPage('index')">
                            <span class="icon iconfont icon-zuo"></span>
                            </li>
                            <li>闲聊群</li>
                            <li onclick="nextPage('groupInfo')"> <span class="icon iconfont icon-elipsis"></span></li>
                        </ul>
                    </header>
                    <article class="chat-main-wrap chats-info-wrap" id="chat-main-wrap">
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                            <div class="chatRow"> <p class="user-icon"> <img src="./icon/icon.jpeg" alt="">  </p>
                                <p  class="user-msg-wrap"> <span >名字</span><span >我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</span></p>
                            </div>
                    </article>
                    <footer class="info-footer">
                        <ul class="footer-inputer-wrap">
                            <li><span class="icon iconfont icon-yuyin"></span></li>
                            <li><input class="inputer-wrap"/></li>
                            <li><span  class="icon iconfont icon-jia "></span></li>
                            <li><span  class="icon iconfont icon-jia"></span></li>
                        </ul>
                        </footer>
                </div>`,
}

const groupInfoPage = {
    url: 'groupInfo',
    in: 'in-animation',
    out: 'out-animation',
    htmlContent: `  <div class="page chat-page" id="groupInfo">
    <header>
    <ul class="info-header">
        <li onclick="nextPage('chatInfo')">
        <span class="icon iconfont icon-zuo"></span>
        </li>
        <li>聊天信息(345)</li>
        <li></li>
    </ul>
    </header>
    <article class="chat-main-wrap group-imgs-wrap" id="chat-main-wrap">
           <ul>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <li><span class="user-icon"> <img src="./icon/WechatIMG7.jpeg" alt="">  </span><span class="user-name">好友1</span></li>
               <p class="more-member">查看更多群成员</p>
            </ul>
            <div class="group-info">
                <div>
                    <p>群聊名称</p>
                    <p>
                        <span>我的群名字</span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
                <div>
                    <p>群二维码</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
                <div>
                    <p>群公告</p>
                    <p>
                        <span>我的群公告</span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
                <div>
                    <p>备注</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
            </div>
            <div class="group-info">
                <div>
                    <p>查找聊天内容</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
            </div>
            <div class="group-info">
                <div>
                    <p>查找聊天内容</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
            </div>
            <div class="group-info">
                <div>
                    <p>我在本群的昵称</p>
                    <p>
                        <span>这波能反杀</span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
            </div>
            <div class="group-info">
                <div>
                    <p>设置当前聊天背景</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
                <div>
                    <p>投诉</p>
                    <p>
                        <span></span>
                        <span class="icon iconfont icon-zuo"></span>
                    </p>
                </div>
            </div>
            <div class="group-info">
                <div class="exit-clear">
                    清空聊天记录
                </div>
                <div class="exit-clear">
                   删除并推出
                </div>
            </div>
    </article>
</div>`,

}

const pages = [chatPage,chatInfoPage,groupInfoPage]