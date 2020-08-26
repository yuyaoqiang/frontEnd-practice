
import Navigator from "./navigation.js";
import observer from "./observer.js";
import config from "./config.js"
import {getPath} from "../util/utils.js"


const navigator = new Navigator(config);

// 初始化
export const init = () => {
    if (navigator.stack.size() === 0) {
        let path = getPath();
        navigator.go(path);
        initListener();
    };
}

const initListener = () => {
    window.onpopstate = () => {
        let path = getPath();
        let has = navigator.isHas(path);
        if (has) {
            observer.publish("back");
        } else {
            observer.publish("go");
        }
  };

    observer.addListener("go", () => {
        let path = getPath();
        navigator.go(path);
    });

    observer.addListener("back", () => {
        navigator.back();
    });
}