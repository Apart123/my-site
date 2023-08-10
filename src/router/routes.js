import Home from "@/views/Home/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project.vue";
import About from "@/views/About/About.vue";
import Message from "@/views/Message.vue";
import BlogDetail from "@/views/Blog/Detail";

export default [
  { name: "Home", path: "/", component: Home },
  { name: "Blog", path: "/article", component: Blog },
  { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/article/:id", component: BlogDetail },
  { name: "Project", path: "/project", component: Project },
  { name: "About", path: "/about", component: About },
  { name: "Message", path: "/message", component: Message },
];

