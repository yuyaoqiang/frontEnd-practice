// 发布订阅者模式
class Observer {
    constructor() {
        this.messageMap = {};
        this.instance = null;
    }

    static getInstance() {
        if (!this.instance) {
            return this.instance = new Observer();
        }
        return this.instance;
    }

    addListener(message, subscribe) {
        if (!subscribe || !message) return false;
        if (!this.messageMap[message]) this.messageMap[message] = [];
        this.messageMap[message].push(subscribe);
    }

    removeListener(message) {
        if (!message) return false;
        delete this.messageMap[message];
    }

    publish(message, info) {
        const subscribes = this.messageMap[message];
        subscribes.forEach((subscribe) => subscribe(info));
    }
}

const observer = Observer.getInstance();
export default observer;