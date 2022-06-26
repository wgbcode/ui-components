import React from "react";
import "./button.example.scss";
import CommonExample from "../common.example";

const ButtonExample: React.FunctionComponent = () => {
  const name = "Button";
  const titleText = "按钮用于开始一个即时操作。";
  const usageText = "响应用户点击行为，触发相应业务逻辑。";
  const codeContent = [
    [
      <button>Default</button>,
      "组件形式",
      "按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。",
    ],
  ];
  const API = [
    [
      "type",
      "不同样式风格的按钮",
      "'default' | 'dashed' | 'primary' | 'danger'",
      "default",
    ],
    ["ghost", "幽灵按扭", Boolean, false],
    ["loading", "加载中状态", Boolean, false],
    ["className", "自定义 button 类名", "string", "————"],
    ["onClick", "点击按钮时的回调函数", "React.MouseEventHandler", "————"],
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

export default ButtonExample;
