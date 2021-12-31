/**
 * 实现效果：不管用户第一个访问的页面是：首页、详情页、购物车、个人中心...任意页面，
 * 保障该页面周期onLoad、onShow、onReady运行时，都是处于已登录（登录态）。如果在每个页面都
 * 需要加登录判断，页面越多，维护难度会越大大。
 */
let isLogin = false;

// 发布订阅模式
class Publisher {
  constructor() {
    this.map = new Map();
  }
  on(key, callback) {
    let arr = this.map.get(key) || [];
    arr.push(callback);
    this.map.set(key, arr);
  }
  emit(key, data = {}) {
    if (this.map.has(key)) {
      this.map.get(key).forEach((item) => {
        item.call(this, data);
      });
    }
  }
}

let publisher = new Publisher();

// 页面扩展
const oldPage = Page;
Page = function (pageParams) {
  const { onLoad, onShow, onReady } = pageParams;
  // 劫持单页面中的onLoad，执行页面中的onLoad时，会先走这里判断是否有登录
  pageParams.onLoad = function (params) {
    // 判断是否登陆
    // 由于js是异步执行，直接把登录写在onLaunch，在执行页面onLoad时，可能会因为登录接口未返回，页面onLoad拿不到登录信息，导致异常。
    
    if (isLogin) {
      onLoad && onLoad.call(this, params);
    } else {
      // 所以这里利用发布订阅模式，等onLaunch执行完登录流程，再继续走onLoad流程
      publisher.on("login", () => {
        isLogin = true;
        onLoad && onLoad.call(this, params);
      });
    }
  };

  pageParams.onShow = function () {
    // 判断是否登陆
    if (isLogin) {
      onShow && onShow.call(this);
    } else {
      publisher.on("login", () => {
        onShow && onShow.call(this);
      });
    }
  };

  pageParams.onReady = function () {
    // 判断是否登陆
    if (isLogin) {
      onReady && onReady.call(this);
    } else {
      publisher.on("login", () => {
        onReady && onReady.call(this);
      });
    }
  };
  return oldPage(pageParams);
};

module.exports = {
  publisher,
};
