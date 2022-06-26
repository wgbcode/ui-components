import React from "react";
import Icon from "./icon";
import "./icon.example.scss";
import CommonExample from "../common.example";

const IconExample: React.FunctionComponent = () => {
  const name = "Icon";
  const titleText = "语义化的矢量图形。";
  const usageText = "需要用到 svg 图标时。";
  const codeContent = [
    [
      name,
      <Icon name="alipay" />,
      "组件形式",
      "导入 svg 图标后，可设置宽高、颜色、类名。",
    ],
  ];
  const API = [
    ["name", "内嵌 Icon 图标的 name 属性", "string", "alipay"],
    ["className", "计算后的 svg 类名", "string", "————"],
    ["fill", "svg 元素填充的颜色", "string", "————"],
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

export default IconExample;
