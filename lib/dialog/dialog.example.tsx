import { scopedClassMaker } from "../helpers/classes";
import Icon from "../icon/icon";
import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import "./dialog.example.scss";

const sc = scopedClassMaker("wu-dialog-example");
const sc1 = scopedClassMaker("wu-dialog-example-code-content");
const sc2 = scopedClassMaker("wu-dialog-example-API");

const DialogExample: React.FunctionComponent<any> = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  return (
    <ol className="wu-dialog-example">
      <li className={sc("title")}>
        <h1>Dialog 按钮</h1>
        <span>弹出一个对话框。</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>需要与用户交互，同时避免中断用户的操作流程时。</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <div>
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
              <button onClick={() => setZ(!z)}>modal 组件</button>
              <Dialog visible={z} onClose={() => setZ(false)}>
                <div>你好，我是 modal 组件!</div>
              </Dialog>
            </div>
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>组件式使用</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>
              使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。
            </span>
            <div className={sc1("illust-icon")}>
              <Icon name="codeOpen" />
            </div>
          </div>
        </div>

        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <div>
              <button onClick={() => alert("你好，我是 alert API")}>
                alert API
              </button>
            </div>
            <div>
              <button onClick={() => confirm("你好，我是 confirm API")}>
                confirm API
              </button>
            </div>
            <div>
              <button onClick={() => modal("你好，我是 modal API")}>
                modal API
              </button>
            </div>
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>命令式使用</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>
              调用 openModal 函数弹出一个对话框，openModal 函数将返回一个
              promise 对象，其状态由用户操作决定。openModal 函数接受一个 options
              参数，支持组件大部分属性，具体属性设置见 Options。
            </span>
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
              <td>visible</td>
              <td>对话框是否可见</td>
              <td> boolean</td>
              <td>————</td>
            </tr>
            <tr>
              <td>title</td>
              <td>标题</td>
              <td> string | ReactNode</td>
              <td>————</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>底部内容</td>
              <td>ReactNode</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onConfirm</td>
              <td>点击确认按钮时的回调</td>
              <td>e: React.MouseEvent ={">"} any</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onCancel</td>
              <td>点击取消按钮时的回调</td>
              <td>e: React.MouseEvent ={">"} any</td>
              <td>————</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>点击蒙层是否关闭 Modal（相当于点击取消按钮）</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>afterClose</td>
              <td>对话框完全关闭（离场动画结束）时的回调</td>
              <td>() ={">"} any</td>
              <td>————</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义 Modal 类名</td>
              <td>string</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default DialogExample;
