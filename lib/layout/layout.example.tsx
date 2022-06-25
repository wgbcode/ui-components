import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import "./layout.example.scss";
import { scopedClassMaker } from "../helpers/classes";
import Icon from "../icon/icon";

const sc = scopedClassMaker("wu-layout-example");
const sc1 = scopedClassMaker("wu-layout-example-code-content");
const sc2 = scopedClassMaker("wu-layout-example-API");

export default function () {
  return (
    <ol className="wu-layout-example">
      <li className={sc("title")}>
        <h1>Layout 按钮</h1>
        <span>协助进行页面级整体布局。</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>xxx</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <ol className={sc1("layouts")}>
            <li className={sc1("layouts-layout")}>
              <Layout>
                <Header className="x">header</Header>
                <Content className="y">content</Content>
                <Footer className="x">footer</Footer>
              </Layout>
            </li>
            <li className={sc1("layouts-layout")}>
              <Layout>
                <Header className="x">header</Header>
                <Layout>
                  <Aside className="z">aside</Aside>
                  <Content className="y">content</Content>
                </Layout>
                <Footer className="x">footer</Footer>
              </Layout>
            </li>
            <li className={sc1("layouts-layout")}>
              <Layout>
                <Header className="x">header</Header>
                <Layout>
                  <Content className="y">content</Content>
                  <Aside className="z">aside</Aside>
                </Layout>
                <Footer className="x">footer</Footer>
              </Layout>
            </li>
            <li className={sc1("layouts-layout")}>
              <Layout>
                <Aside className="z">aside</Aside>
                <Layout>
                  <Header className="x">header</Header>
                  <Content className="y">content</Content>
                  <Footer className="x">footer</Footer>
                </Layout>
              </Layout>
            </li>
          </ol>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>基本结构</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>典型的页面布局。</span>
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
              <td>className</td>
              <td>容器 className</td>
              <td> string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>hasSider</td>
              <td>
                表示子元素里有
                Sider，一般不用指定。可用于服务端渲染时避免样式闪动
              </td>
              <td>boolean</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
}
