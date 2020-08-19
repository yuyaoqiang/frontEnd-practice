// 栈管理
class Stack {
  constructor() {
    this.len = 0; // 栈长度
    this.stack = {}; // 栈
  }

  static getStackInstance() {
    if (!this.instance) {
      this.instance = new Stack();
    }
    return this.instance;
  }

  // 栈顶
  getStackTop() {
    return this.stack[this.len];
  }

  // 获取栈中所有数据
  getStacks() {
    let result = [];
    if (this.len === 0) return [];
    Object.keys(this.stack).forEach((s) => result.push(this.stack[s]));
    return result;
  }
  
  // 进栈
  push(page) {
    this.len += 1;
    this.stack[this.len] = page;
    return this.getStackTop();
  }

  // 出栈
  pop() {
    const stackTop = this.getStackTop();
    delete this.stack[this.len];
    this.len -= 1;
    return stackTop;
  }

  //销毁
  clean() {
    this.len = 0;
    this.stack = {};
  }

}

export default Stack;