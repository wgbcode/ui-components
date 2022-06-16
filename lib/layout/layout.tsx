import React, { ReactElement } from "react";
import "./layout.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const hasAside = (props.children as ReactElement[])
    .map((item) => item.props.children)
    .includes("aside"); // 强行断言：ReactElemtnt
  return (
    <div className={hasAside ? "gu-layout-hasAside" : "gu-layout"} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
