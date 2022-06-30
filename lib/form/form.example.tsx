import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import "./form.example.scss";
import CommonExample from "../common.example";

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
  const name = "Form";
  const titleText =
    "高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。";
  const usageText = "响应用户点击行为，触发相应业务逻辑。";
  const codeContent = [
    [
      name,
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
      ></Form>,
      "基本使用",
      "xxx",
    ],
  ];
  const API = [
    [
      "fields",
      "通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。",
      "FieldData[]",
      "————",
    ],
    ["name", "表单名称，会作为表单字段 id 前缀使用", "string", "————"],
    [
      "onValuesChange",
      "字段值更新时触发回调事件",
      "function(changedValues, allValues)",
      "————",
    ],
    [
      "onFinish",
      "提交表单且数据验证成功后回调事件",
      "function(values)",
      "————",
    ],
    [
      "onFinishFailed",
      "提交表单且数据验证失败后回调事件",
      "function(value)",
      "————",
    ],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./form.api.tsx")}
    />
  );
};

export default FormExample;
