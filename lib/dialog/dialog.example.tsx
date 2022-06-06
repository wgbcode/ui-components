import React, { Fragment, useState } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent<any> = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  return (
    <Fragment>
      <div>
        <h3>example1</h3>
        <button onClick={() => setY(!y)}>alert</button>
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
        <h3>example2</h3>
        <button onClick={() => setX(!x)}>confirm</button>
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
        <h3>example3</h3>
        <button onClick={() => setZ(!z)}>modal</button>
        <Dialog visible={z} onClose={() => setZ(false)}>
          <div>你好，我是 modal 组件!</div>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default DialogExample;
