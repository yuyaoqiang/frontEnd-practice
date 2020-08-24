
import navigator from "./navigation.js";
import observer from "./observer.js";

// 当前Path
const getPath = () => {
  return window.location.hash.slice(1) || 'home';
}

// 路由中是否已存在
const isHas = () => {
  let has = false;
  let path = getPath();
  navigator.stack.hasEqual((stack) => {
    const index = Object.keys(stack).findIndex(s => stack[s].path === path);
    has = index === -1 ? false : true;
  })
  return has;
}

// 初始化
export const init = () => {
  if (navigator.stack.size() === 0) {
    let path = getPath();
    navigator.go(path)
    initListener();
  };
}

const initListener = () => {
  window.onpopstate = () => {
    let has = isHas();
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