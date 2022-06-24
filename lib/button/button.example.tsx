import React from "react";
import "./button.example.scss";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <ol className="wu-button-example">
      <li className="wu-button-example-title">
        <strong>Button 按钮</strong>
        <span>按钮用于开始一个即时操作。</span>
      </li>
      <li className="wu-button-example-usage">
        <strong>何时使用</strong>
        <span>响应用户点击行为，触发相应业务逻辑。</span>
      </li>
      <li className="wu-button-example-code">
        <strong>代码示例</strong>
        <button>button</button>
      </li>
      <li className="wu-button-example-API">
        <strong>API</strong>
        <span>xxx</span>
      </li>
    </ol>
  );
};

export default ButtonExample;
