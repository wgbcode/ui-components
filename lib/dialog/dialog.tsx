import Icon from "../icon/icon";
import React, { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";
import { scopedClassMaker } from "../helpers/classes";

interface Props {
  visible: Boolean;
  buttons?: ReactElement[];
  onClose: () => void;
}

const scopedClass = scopedClassMaker("fui-dailog");
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
  const result = props.visible && (
    <Fragment>
      <div className={sc("wrapper")}>
        <div className={sc("")}>
          <header className={sc("header")}>
            <strong>提示</strong>
            <Icon
              name="close"
              className={sc("icon")}
              onClick={() => props.onClose()}
            />
          </header>
          <main className={sc("main")}>{props.children}</main>
          <footer className={sc("footer")}>
            {props.buttons &&
              props.buttons.map((item, index) =>
                React.cloneElement(item, { key: index })
              )}
          </footer>
        </div>
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(result, document.body); // 传送门
};

export default Dialog;
