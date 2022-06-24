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
import { scopedClassMaker } from "./lib/helpers/classes";
import "./example.scss";

const sc = scopedClassMaker("wu-webPage");
const sc1 = scopedClassMaker("wu-webPage-navBar");
const sc2 = scopedClassMaker("wu-webPage-content");

ReactDOM.render(
  <Router>
    <div className="wu-webPage">
      <header className={sc("navBar")}>
        <div className={sc1("header")}>
          <div className={sc1("header-icon")}>
            <Icon name="UILogo" />
          </div>
          <h2 className={sc1("header-text")}>Wu-UI-React</h2>
        </div>
        <div className={sc1("footer")}>
          <Icon name="github" />
        </div>
      </header>
      <div className={sc("content")}>
        <aside className={sc2("aside")}>
          <div className={sc2("aside-title")}>组件总览</div>
          <ul className={sc2("aside-nav")}>
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
        <main className={sc2("main")}>
          <Route path="/button" component={ButtonExample} />
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
        </main>
      </div>
      <footer className={sc("footer")}>
        <div className={sc("footer-left")}>
          <Icon name="github" />
          <span>Github</span>
        </div>

        <div className={sc("footer-right")}>
          <Icon name="react" />
          <span>Wu-UI-React</span>
        </div>
      </footer>
    </div>
  </Router>,
  document.querySelector("#root")
);
