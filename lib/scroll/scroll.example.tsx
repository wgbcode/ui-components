import { scopedClassMaker } from "../helpers/classes";
import Icon from "../icon/icon";
import React from "react";
import Scroll from "./scroll";
import "./scroll.example.scss";

const sc = scopedClassMaker("wu-scroll-example");
const sc1 = scopedClassMaker("wu-scroll-example-code-content");
const sc2 = scopedClassMaker("wu-scroll-example-API");

const ScrollExample: React.FC = () => {
  const onPull = () => {
    console.log("调用下拉更新函数");
  };
  return (
    <ol className="wu-scroll-example">
      <li className={sc("title")}>
        <h1>Scroll 滚动条</h1>
        <span>自定义滚动条。</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>当需要使用自定义滚动条代替浏览器自带滚动条时。</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <Scroll onPull={onPull}></Scroll>
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>基本用法</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>最基本的用法。</span>
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
              <td>scrollBarVisible</td>
              <td>是否始终展示滚动条</td>
              <td> boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义外层容器类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>trackClassName</td>
              <td>自定义滚动条滑块轨道容器类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>trackStyle</td>
              <td>自定义滚动条滑块轨道容器样式</td>
              <td>React.CSSProperties</td>
              <td>————</td>
            </tr>
            <tr>
              <td>scroollBarClassName</td>
              <td>自定义滚动条滑块类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>scrollBarStyle</td>
              <td>自定义滚动条滑块样式</td>
              <td>React.CSSProperties</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default ScrollExample;
