import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    usename: "",
    password: "",
  });
  const [fields] = useState([
    { name: "usename", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const onSubmit = () => {
    const rule = [{ key: "usename", minLength: 6, maxLength: 16 }];
    Validator(formData, rule);
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
    ></Form>
  );
};

export default FormExample;
