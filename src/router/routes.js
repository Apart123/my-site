import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Project from "@/views/Project.vue";
import About from "@/views/About.vue";
import Message from "@/views/Message.vue";

export default [
  { name: "home", path: "/", component: Home },
  { name: "blog", path: "/article", component: Blog },
  { name: "project", path: "/project", component: Project },
  { name: "about", path: "/about", component: About },
  { name: "message", path: "/message", component: Message },
];
