import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import "./dialog.example.scss";
import CommonExample from "../common.example";

const DialogExample: React.FunctionComponent<any> = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const name = "Dialog";
  const titleText = "弹出一个对话框。";
  const usageText = "需要与用户交互，同时避免中断用户的操作流程时";
  const codeContent = [
    [
      <>
        <div>
          <button onClick={() => setY(!y)}>alert 组件</button>
          <Dialog
            visible={y}
            onClose={() => setY(false)}
            buttons={[
              <button
                onClick={() => {
                  setY(false);
                }}
              >
                确定
              </button>,
            ]}
          >
            <div>你好，我是 alert 组件!</div>
          </Dialog>
        </div>
        <div>
          <button onClick={() => setX(!x)}>confirm 组件</button>
          <Dialog
            visible={x}
            onClose={() => setX(false)}
            buttons={[
              <button
                onClick={() => {
                  setX(false);
                }}
              >
                确定
              </button>,
              <button
                onClick={() => {
                  setX(false);
                }}
              >
                取消
              </button>,
            ]}
          >
            <div>你好，我是 confirm 组件!</div>
          </Dialog>
        </div>
        <div>
          <button onClick={() => setZ(!z)}>modal 组件</button>
          <Dialog visible={z} onClose={() => setZ(false)}>
            <div>你好，我是 modal 组件!</div>
          </Dialog>
        </div>
      </>,
      "组件式使用",
      "使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。",
    ],
    [
      <>
        <div>
          <button onClick={() => alert("你好，我是 alert API")}>
            alert API
          </button>
        </div>
        <div>
          <button onClick={() => confirm("你好，我是 confirm API")}>
            confirm API
          </button>
        </div>
        <div>
          <button onClick={() => modal("你好，我是 modal API")}>
            modal API
          </button>
        </div>
      </>,
      "命令式使用",
      "调用 openModal 函数弹出一个对话框，openModal 函数将返回一个promise 对象，其状态由用户操作决定。openModal 函数接受一个 options 参数，支持组件大部分属性，具体属性设置见 Options。",
    ],
  ];
  const API = [
    ["visible", "对话框是否可见", Boolean, "————"],
    ["title", "标题", "string | ReactNode", "————"],
    ["footer", "底部内容", "ReactNode", "————"],
    ["onConfim", "点击确认按钮时的回调", "e: React.MouseEvent => any", "————"],
    ["oonCancel", "点击取消按钮时的回调", "e: React.MouseEvent => any", "————"],
    [
      "maskClosable",
      "点击蒙层是否关闭 Modal（相当于点击取消按钮）",
      Boolean,
      false,
    ],
    ["afterClose", "对话框完全关闭（离场动画结束）时的回调", "()=>any", "————"],
    ["className", "自定义 Modal 类名", "string", "————"],
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

export default DialogExample;
