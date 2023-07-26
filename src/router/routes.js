import Home from "@/views/Home/index.vue";
import Blog from "@/views/Blog/Blog.vue";
import Project from "@/views/Project.vue";
import About from "@/views/About/About.vue";
import Message from "@/views/Message.vue";

export default [
  { name: "Home", path: "/", component: Home },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "Project", path: "/project", component: Project },
  { name: "About", path: "/about", component: About },
  { name: "Message", path: "/message", component: Message },
];

