import React from "react";
import Icon from "./icon";
import { scopedClassMaker } from "../helpers/classes";
import "./icon.example.scss";

const sc = scopedClassMaker("wu-icon-example");
const sc1 = scopedClassMaker("wu-icon-example-code-content");
const sc2 = scopedClassMaker("wu-icon-example-API");

const IconExample: React.FunctionComponent = () => {
  return (
    <ol className="wu-icon-example">
      <li className={sc("title")}>
        <h1>Icon 图标</h1>
        <span>语义化的矢量图形。</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>需要用到 svg 图标时。</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <Icon name="alipay" />
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>组件形式</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>
              导入 svg 图标后，可设置宽高、颜色、类名。
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
              <td>name</td>
              <td>内嵌 Icon 图标的 name 属性</td>
              <td> string</td>
              <td>"alipay"</td>
            </tr>
            <tr>
              <td>className</td>
              <td>计算后的 svg 类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>fill</td>
              <td>svg 元素填充的颜色</td>
              <td>string</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default IconExample;
