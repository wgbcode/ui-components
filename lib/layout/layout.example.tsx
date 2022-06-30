import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import CommonExample from "../common.example";
import { scopedClassMaker } from "../helpers/classes";
import "./layout.example.scss";

export default function () {
  const sc = scopedClassMaker("wu-layout-example-code-content-items-layout");
  const name = "Layout";
  const titleText = "协助进行页面级整体布局。";
  const usageText = "xxx";
  const codeContent = [
    [
      name,
      <>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Layout>
              <Aside className="z">aside</Aside>
              <Content className="y">content</Content>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Layout>
              <Content className="y">content</Content>
              <Aside className="z">aside</Aside>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Aside className="z">aside</Aside>
            <Layout>
              <Header className="x">header</Header>
              <Content className="y">content</Content>
              <Footer className="x">footer</Footer>
            </Layout>
          </Layout>
        </div>
      </>,
      "基本结构",
      "典型的页面布局。",
    ],
  ];
  const API = [
    ["className", "容器 className", "string", "————"],
    [
      "hasSider",
      " 表示子元素里有Sider，一般不用指定。可用于服务端渲染时避免样式闪动",
      "boolean",
      "————",
    ],
    ["loading", "加载中状态", "boolean", "false"],
    ["onClick", "点击按钮时的回调函数", "React.MouseEventHandler", "————"],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./layout.api.tsx")}
    />
  );
}
