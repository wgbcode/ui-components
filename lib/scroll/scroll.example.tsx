import React from "react";
import Scroll from "./scroll";

const ScrollExample: React.FC = () => {
  const onPull = () => {
    console.log("调用下拉更新函数");
  };
  return <Scroll onPull={onPull}></Scroll>;
};

export default ScrollExample;
