import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon.vue";
import styles from "./showMessage.module.less";

// content, type = "info", duration = 1000, container
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  let div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div class="content">${content}</div>`;
  const infoClassName = styles[`message-${type}`];
  div.className = `${styles.message} ${infoClassName}`;

  // 容器的 position 是否改动过
  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }

  container.appendChild(div);

  // 强行渲染 读取位置、尺寸等属性会触发
  div.clientHeight; // 导致 reflow

  // 回到正常位置
  div.style.transform = `translate(-50%, -50%)`;
  div.style.opacity = 1;

  // duration 之后消失
  setTimeout(() => {
    div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
    div.style.opacity = 0;
    // 过渡结束之后移除 DOM 元素
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        options.callback && options.callback(); 
      },
      { once: true }
    );
  }, duration);
}
