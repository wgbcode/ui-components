import React, { Fragment, useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";

const DialogExample: React.FunctionComponent<any> = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  return (
    <Fragment>
      <ol>
        <li>
          <div>Dialog 对话框</div>
          <span>xxx</span>
        </li>
        <li>
          <div>何时使用</div>
          <span>xxx</span>
        </li>
        <li>
          <div>代码示例</div>
          <div>
            <h3>example1.1</h3>
            <button onClick={() => setY(!y)}>alert 组件</button>
            <Dialog
              visible={y}
              onClose={() => setY(false)}
              buttons={[
                <button
                  onClick={() => {
                    setY(false);
                  }}
                >
                  确定
                </button>,
              ]}
            >
              <div>你好，我是 alert 组件!</div>
            </Dialog>
          </div>
          <div>
            <h3>example1.2</h3>
            <button onClick={() => alert("你好，我是 alert API")}>
              alert API
            </button>
          </div>
          <div>
            <h3>example2.1</h3>
            <button onClick={() => setX(!x)}>confirm 组件</button>
            <Dialog
              visible={x}
              onClose={() => setX(false)}
              buttons={[
                <button
                  onClick={() => {
                    setX(false);
                  }}
                >
                  确定
                </button>,
                <button
                  onClick={() => {
                    setX(false);
                  }}
                >
                  取消
                </button>,
              ]}
            >
              <div>你好，我是 confirm 组件!</div>
            </Dialog>
          </div>
          <div>
            <h3>example2.2</h3>
            <button onClick={() => confirm("你好，我是 confirm API")}>
              confirm API
            </button>
          </div>
          <div>
            <h3>example3.1</h3>
            <button onClick={() => setZ(!z)}>modal 组件</button>
            <Dialog visible={z} onClose={() => setZ(false)}>
              <div>你好，我是 modal 组件!</div>
            </Dialog>
          </div>
          <div>
            <h3>example3.2</h3>
            <button onClick={() => modal("你好，我是 modal API")}>
              modal API
            </button>
          </div>
        </li>
        <li>
          <div>API</div>
          <span>xxx</span>
        </li>
      </ol>
    </Fragment>
  );
};

export default DialogExample;
