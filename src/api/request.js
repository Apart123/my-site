import axios from "axios";
import { showMessage } from "@/utils";

const ins = axios.create(); // 创建axios实例ins， ins 和 axios 一样
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
