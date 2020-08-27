import Home from "../pages/home.js"
import Chat from "../pages/chat.js"
import Info from "../pages/info.js"

const config = {

		home: {
				path: 'home',
				title: '微信',
				component: Home,

		},
		chat: {
				path: 'chat',
				title: '闲聊群',
				component: Chat,
		},
		info: {
				path: 'info',
				title: '闲聊群',
				component: Info,
		}
}

export default config;