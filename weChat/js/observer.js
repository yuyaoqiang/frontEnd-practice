// 发布订阅者模式
class Observer {
    constructor(stackManage) {
        this.messageMap = {};
        if (!Observer.instance) {
            Observer.instance = this;
            Observer.instance.addListener("go", (info) => {
                stackManage.push(info);
            });

            Observer.instance.addListener("back", (info) => {
                stackManage.pop();
            });
        }
        return Observer.instance
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

export default Observer;