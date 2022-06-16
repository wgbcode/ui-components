import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import FormExample from "./lib/form/form.example";

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">FUI</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog 对话框</Link>
            </li>
            <li>
              <Link to="/layout">Layout 布局</Link>
            </li>
            <li>
              <Link to="/form">Form 表单</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/button" component={ButtonExample} />
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
