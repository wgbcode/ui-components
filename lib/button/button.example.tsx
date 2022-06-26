import Icon from "../icon/icon";
import React from "react";
import { scopedClassMaker } from "../helpers/classes";
import "./button.example.scss";

const sc = scopedClassMaker("wu-button-example");
const sc1 = scopedClassMaker("wu-button-example-code-content");
const sc2 = scopedClassMaker("wu-button-example-API");

const ButtonExample: React.FunctionComponent = () => {
  return (
    <ol className="wu-button-example">
      <li className={sc("title")}>
        <h1>Button 按钮</h1>
        <span>按钮用于开始一个即时操作。</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>响应用户点击行为，触发相应业务逻辑。</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <button>Default</button>
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>组件形式</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>
              按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。
            </span>
            <div className={sc1("illust-icon")}>
              <Icon name="codeOpen" />
            </div>
          </div>
        </div>
      </li>
      <li className={sc("API")}>
        <h2>API</h2>
        <table className={sc2("table")}>
          <thead className={sc2("table-thead")}>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody className={sc2("table-tbody")}>
            <tr>
              <td>type</td>
              <td>不同样式风格的按钮</td>
              <td> 'default' | 'dashed' | 'primary' | 'danger'</td>
              <td>'default'</td>
            </tr>
            <tr>
              <td>ghost</td>
              <td>幽灵按扭</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>加载中状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义 button 类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>点击按钮时的回调函数</td>
              <td>React.MouseEventHandler</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default ButtonExample;
