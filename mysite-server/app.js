const mongoose = require('mongoose');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');
// monkey toJSON
const originToJSON = mongoose.Document.prototype.toJSON;
mongoose.Document.prototype.toJSON = function (...args) {
  const obj = originToJSON.call(this, ...args);
  if (obj._id) {
    obj.id = obj._id;
    delete obj._id;
  }
  return obj;
};

// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  // 初始化管理员
  async initAdmin() {
    const Admin = this.app.model.Admin;
    const count = await Admin.countDocuments();
    if (!count) {
      this.app.config.admin.loginPwd = md5(this.app.config.admin.loginPwd);
      await Admin.create(this.app.config.admin);
      console.log('管理员初始化成功');
    }
  }

  // 初始化全局设置
  async initSetting() {
    const Setting = this.app.model.Setting;
    const count = await Setting.countDocuments();
    if (!count) {
      await Setting.create({
        avatar: 'https://tvax3.sinaimg.cn/crop.0.0.512.512.180/001XZDurly8hf856sjiatj60e80e874x02.jpg?KID=imgbed,tva&Expires=1690101911&ssig=n0ZRhKPhls',
        siteTitle: '我的个人空间',
        github: 'https://github.com/Apart123',
        qq: '1798028945',
        qqQrCode:
          'https://wx2.sinaimg.cn/mw690/006FGbL7ly1hgyl5mbmzvj30do0dkgod.jpg',
        weixin: 'oyo',
        weixinQrCode:
          'https://wx3.sinaimg.cn/mw690/006FGbL7ly1hgyl5mcidrj30no0noqd7.jpg',
        mail: '18280977332@163.com',
        icp: '川ICP备654321号',
        githubName: 'Apart123',
        favicon: 'https://wx3.sinaimg.cn/orj360/006FGbL7ly1hhu2rd7gzmj308c08cglu.jpg',
      });
      console.log('全局设置初始化成功');
    }
  }

  // 初始化关于我信息
  async initAbout() {
    const About = this.app.model.About;
    const count = await About.countDocuments();
    if (!count) {
      await About.create({
        url: '',
      });
      console.log('关于我信息初始化成功');
    }
  }

  mkUpload() {
    const fs = require('fs');
    const path = require('path');
    try {
      fs.mkdirSync(path.resolve(__dirname, './app/public/upload'));
    } catch {
      // do nothing
    }
  }

  initAvatars() {
    const allows = ['.png', '.gif', '.jpg', '.png', '.webp', '.bmp', '.svg'];
    const files = fs
      .readdirSync(path.resolve(__dirname, './app/public/avatar'))
      .filter((name) => allows.includes(path.extname(name).toLowerCase()))
      .map((name) => `${this.app.config.static.prefix}avatar/${name}`);
    this.app.config.avatars = files;
  }

  willReady() {
    // 初始化管理员
    this.initAdmin();

    // 初始化全局设置
    this.initSetting();

    // 初始化上传目录
    this.mkUpload();

    // 初始化关于我信息
    this.initAbout();

    // 初始化头像数据
    this.initAvatars();
  }
}

module.exports = AppBootHook;
