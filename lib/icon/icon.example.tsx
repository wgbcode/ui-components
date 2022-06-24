import React from "react";
import Icon from "./icon";
import { scopedClassMaker } from "../helpers/classes";
import "./icon.example.scss";

const sc = scopedClassMaker("wu-icon-example");

const IconExample: React.FunctionComponent = () => {
  return (
    <ol className="wu-icon-example">
      <li className={sc("title")}>
        <strong>Icon 图标</strong>
        <span>语义化的矢量图形。</span>
      </li>
      <li className={sc("usage")}>
        <strong>何时使用</strong>
        <span>响应用户点击行为，触发相应业务逻辑。</span>
      </li>
      <li className={sc("code")}>
        <strong>代码示例</strong>
        <div>
          <Icon name="alipay" />
          <Icon name="wechat" />
          <Icon name="qq" />
        </div>
      </li>
      <li className={sc("API")}>
        <strong>API</strong>
        <span>xxx</span>
      </li>
    </ol>
  );
};

export default IconExample;
