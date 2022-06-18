import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

const usernames = ["frank", "jack", "frankfrank", "alice", "bob"];
const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void
) => {
  setTimeout(() => {
    // console.log("我现在知道用户名是否存在");
    if (usernames.indexOf(username) < 0) {
      succeed();
    } else {
      fail();
    }
  }, 2000);
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
        () => reject("用户名重复") // 返回一个被拒绝的 Promise 对象，并将参数传出
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
  return (
    <Form
      fields={fields}
      value={formData}
      onChange={(newValue) => setFormData(newValue)}
      button={
        <Fragment>
          <button type="submit">提交</button>
          <button>返回</button>
        </Fragment>
      }
      onSubmit={() => onSubmit()}
    >
      {JSON.stringify(errors)}
    </Form>
  );
};

export default FormExample;
