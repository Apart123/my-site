# my-site 个人博客系统

## 使用

```shell
# 克隆仓库
git clone https://git@github.com:Apart123/my-site.git
# 安装依赖
npm i
# 启动项目
npm run serve
```

## 项目展示

### 前台

![前台](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904100756198.png)

### 后台

![后台](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904101737019.png)

## 功能和特性

### 前台

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904101130757.png" alt="image-20230904101130757" style="zoom:67%;" alt="前台功能列表" />

- 首页：banner 图片、个性标语展示
- 文章：已成功发布的文章展示
  - 可以根据文章分类筛选文章
  - 分页展示文章列表
  - 文章详情页面可以对改文章进行评论
- 关于我：我的简历
- 项目&效果：存储个人项目或练习 demo
- 留言板：游客的留言板，没有身份权限限制

###  后台

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904110231792.png" alt="image-20230904110231792" style="zoom:50%;" alt="后台功能列表" />

- 对前台页面各个显示内容的增删改查



## 技术选型

- Vue 2
- axios
- vuex
- element-ui
- eslint
- querystring



## 目录结构

- background-system: 后台系统
- background-system: 后台
- mysite-server: 服务器
- public: 公共静态资源
- src
  - api: 获取数据
  - assets: 静态资源
  - components: 自定义的通用组件
    - Avatar: 头像组件
    - Empty: 空数据组件
    - Icon: 图标组件
    - ImageLoader: 渐进式图片组件
    - Layout: 布局组件
    - MessageArea: 留言组件
    - Pager: 分页组件
    - SiteAside: 侧边栏组件
    - ToTop: 回到顶部组件
    - README.md: 组件文档
  - directives: 自定义指令
  - mixins:
  - mock: 模拟数据
  - router
  - store: 仓库
  - style: 公共样式
  - views: 页面
    - About: 关于我
    - Blog: 文章
    - Home: 首页
    - Message: 留言板
    - Project: 项目&效果
    - NotFound.vue: 404 组件
  - App.vue：根组件
  - eventBus.js: 事件总线
  - main.js: 入口文件
- .browserslistrc: 兼容浏览器版本
- .gitignore: 忽略文件
- babel.config.js: Babel配置
- jsconfig.json: JS 配置
- package.json: 项目管理
- vue.config.js: vue-cli 配置
- webpack.config.js: webpack 配置

