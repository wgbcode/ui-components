import React from "react";
import Scroll from "./scroll";
import "./scroll.example.scss";
import CommonExample from "../common.example";

const ScrollExample: React.FC = () => {
  const onPull = () => {
    console.log("调用下拉更新函数");
  };
  const name = "Scroll";
  const titleText = "自定义滚动条。";
  const usageText = "当需要使用自定义滚动条代替浏览器自带滚动条时。";
  const codeContent = [
    [<Scroll onPull={onPull}></Scroll>, "基本用法", "最基本的用法。"],
  ];
  const API = [
    ["scrollBarVisible", "是否始终展示滚动条", Boolean, false],
    ["className", "自定义外层容器类名", "string", "————"],
    ["trackClassName", "自定义滚动条滑块轨道容器类名", "string", "————"],
    [
      "trackStyle",
      "自定义滚动条滑块轨道容器样式",
      "React.CSSProperties",
      "————",
    ],
    ["scroollBarClassName", "自定义滚动条滑块类名", "string", "————"],
    ["scrollBarStyle", "自定义滚动条滑块样式", "React.CSSProperties", "————"],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
    />
  );
};

export default ScrollExample;
