import { publisher } from "./utils/login-sdk";

App({
  onLaunch() {
    this.toLogin();
  },
  // 模拟openid静默登录
  async toLogin() {
    let { code } = await wx.login();
    console.log("模拟post登录 :", code);
    setTimeout(() => {
      publisher.emit("login");
      console.log("登录成功");
    }, 50);
  },
});
