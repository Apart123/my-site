import axios from "axios";
import { showMessage } from "@/utils";

const ins = axios.create(); // 创建axios实例ins， ins 和 axios 一样
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      type: "error",
      content: "未知错误",
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
