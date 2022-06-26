import { scopedClassMaker } from "../helpers/classes";
import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import Icon from "../icon/icon";
import "./form.example.scss";

const sc = scopedClassMaker("wu-form-example");
const sc1 = scopedClassMaker("wu-form-example-code-content");
const sc2 = scopedClassMaker("wu-form-example-API");
const usernames = ["frank", "jack", "frankfrank", "alice", "bob"];

const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void
) => {
  if (usernames.indexOf(username) < 0) {
    succeed();
  } else {
    fail();
  }
};

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    usename: "",
    password: "",
  });
  const [fields] = useState([
    { name: "usename", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const [errors, setErrors] = useState({});
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(
        username,
        () => resolve(""),
        () => reject("unique") // 返回一个被拒绝的 Promise 对象，并将参数传出
      );
    });
  };
  function noError(errors: any) {
    return Object.keys(errors).length === 0;
  }
  const onSubmit = () => {
    const rules = [
      { key: "usename", required: true },
      { key: "usename", validator },
      { key: "usename", minLength: 6, maxLength: 16 },
      { key: "password", required: true },
      { key: "password", pattern: /^[A-Za-z0-9]+$/ },
    ];
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
      if (noError(errors)) {
        // 没错
      }
    });
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: "用户名已存在",
      required: "输入内容不能为空",
      minLength: "输入内容小于6个字符",
      maxLength: "输入内容大于16个字符",
      pattern: "字符样式不匹配，样式应为 0-9 | a-z | A-Z",
    };
    return map[message];
  };
  return (
    <ol className="wu-form-example">
      <li className={sc("title")}>
        <h1>Form 表单</h1>
        <span>
          高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。
        </span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>
          用于创建一个实体或收集信息；需要对输入的数据类型进行校验时。
        </span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        <div className={sc("code-content")}>
          <div className={sc1("items")}>
            <Form
              fields={fields}
              formData={formData}
              onChange={(newValue) => setFormData(newValue)}
              button={
                <Fragment>
                  <button type="submit">提交</button>
                  <button>返回</button>
                </Fragment>
              }
              onSubmit={() => onSubmit()}
              transformError={transformError}
              errors={errors}
            ></Form>
          </div>
          <ol className={sc1("title")}>
            <li className={sc1("title-left")}></li>
            <li className={sc1("title-center")}>基本使用</li>
            <li className={sc1("title-right")}></li>
          </ol>
          <div className={sc1("illust")}>
            <span className={sc1("illust-text")}>xxx</span>
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
              <td>fields</td>
              <td>
                通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。
              </td>
              <td> FieldData[]</td>
              <td>————</td>
            </tr>
            <tr>
              <td>name</td>
              <td>表单名称，会作为表单字段 id 前缀使用</td>
              <td>string</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onValuesChange</td>
              <td>字段值更新时触发回调事件</td>
              <td>function(changedValues, allValues)</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onFinish</td>
              <td>提交表单且数据验证成功后回调事件</td>
              <td>function(values)</td>
              <td>————</td>
            </tr>
            <tr>
              <td>onFinishFailed</td>
              <td>提交表单且数据验证失败后回调事件</td>
              <td>function(value)</td>
              <td>————</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default FormExample;
