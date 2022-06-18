import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

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
  );
};

export default FormExample;
