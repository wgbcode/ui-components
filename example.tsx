import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import FormExample from "./lib/form/form.example";
import ScrollExample from "./lib/scroll/scroll.example";
import Icon from "./lib/icon/icon";
import "./example.scss";

ReactDOM.render(
  <Router>
    <div className="wu-webPage">
      <header className="wu-navBar">
        <div className="wu-navBar-header">
          <div className="wu-navBar-header-icon">
            <Icon name="UILogo" />
          </div>
          <h2 className="wu-navBar-header-text">Wu-UI-React</h2>
        </div>
        <div className="wu-navBar-footer">
          <Icon name="github" />
        </div>
      </header>
      <div className="wu-content">
        <aside className="wu-content-aside">
          <div className="wu-content-aside-title">组件总览</div>
          <ul className="wu-content-aside-nav">
            <li>
              <NavLink to="/button" activeClassName="active">
                Button
              </NavLink>
            </li>
            <li>
              <NavLink to="/icon" activeClassName="active">
                Icon 图标
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialog" activeClassName="active">
                Dialog 对话框
              </NavLink>
            </li>
            <li>
              <NavLink to="/layout" activeClassName="active">
                Layout 布局
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" activeClassName="active">
                Form 表单
              </NavLink>
            </li>
            <li>
              <NavLink to="/scroll" activeClassName="active">
                Scroll 滚动条
              </NavLink>
            </li>
          </ul>
        </aside>
        <main className="wu-content-main">
          <Route path="/button" component={ButtonExample} />
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
