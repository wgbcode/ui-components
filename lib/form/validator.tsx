import React from "react";
import { FormValue } from "./form";

const Validator: React.FC = (formData: FormValue, rule) => {
  console.log(formData);
  console.log(rule);
  if (formData && formData[rule[0].key].length < rule[0].minLength) {
    console.log("长度小于6个字符");
  }
  if (formData && formData[rule[0].key].length > rule[0].maxLength) {
    console.log("长度大于16个字符");
  }
  return <div></div>;
};

export default Validator;
