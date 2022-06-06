import Icon from "../icon/icon";
import React, { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";

interface Props {
  visible: Boolean;
  buttons?: ReactElement[];
  onClose: () => void;
}

const Dialog: React.FC<Props> = (props) => {
  const result = props.visible && (
    <Fragment>
      <div className="fui-dailog-wrapper">
        <div className="fui-dailog">
          <header className="fui-dailog-header">
            <strong>提示</strong>
            <Icon
              name="close"
              className="fui-dailog-icon"
              onClick={() => props.onClose()}
            />
          </header>
          <main className="fui-dailog-main">{props.children}</main>
          <footer className="fui-dailog-footer">
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
