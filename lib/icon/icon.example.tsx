import React from "react";
import Icon from "./icon";
import "./icon.example.scss";

const IconExample: React.FunctionComponent = () => {
  return (
    <ol className="wu-icon-example">
      <li className="wu-icon-example-title">
        <strong>Icon 图标</strong>
        <span>按钮用于开始一个即时操作。</span>
      </li>
      <li className="wu-icon-example-usage">
        <strong>何时使用</strong>
        <span>响应用户点击行为，触发相应业务逻辑。</span>
      </li>
      <li className="wu-icon-example-code">
        <strong>代码示例</strong>
        <div>
          <Icon name="alipay" />
          <Icon name="wechat" />
          <Icon name="qq" />
        </div>
      </li>
      <li className="wu-icon-example-API">
        <strong>API</strong>
        <span>xxx</span>
      </li>
    </ol>
  );
};

export default IconExample;
