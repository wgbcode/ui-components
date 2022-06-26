import Icon from "./icon/icon";
import React from "react";
import { scopedClassMaker } from "./helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
  titleText: string;
  usageText: string;
  codeContent: Array<any[]>;
  API: Array<any[]>;
}

const CommonExample: React.FunctionComponent<Props> = (props) => {
  const { name, titleText, usageText, codeContent, API } = props;
  const sc = scopedClassMaker("wu-" + `${name.toLowerCase()}` + "-example");
  const sc1 = scopedClassMaker(
    "wu-" + `${name.toLowerCase()}` + "-example-code-content"
  );
  const sc2 = scopedClassMaker(
    "wu-" + `${name.toLowerCase()}` + "-example-API"
  );
  return (
    <ol className={sc("")}>
      <li className={sc("title")}>
        <h1>{`${name}` + "按钮"}</h1>
        <span>{titleText}</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>{usageText}</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        {codeContent.map((item) => (
          <div className={sc1("")} key={item[0]}>
            <div className={sc1("items")}>{item[1]}</div>
            <ol className={sc1("title")}>
              <li className={sc1("title-left")}></li>
              <li className={sc1("title-center")}>{item[2]}</li>
              <li className={sc1("title-right")}></li>
            </ol>
            <div className={sc1("illust")}>
              <span className={sc1("illust-text")}>{item[3]}</span>
              <div className={sc1("illust-icon")}>
                <Icon name="codeOpen" />
              </div>
            </div>
          </div>
        ))}
      </li>
      <li className={sc2("")}>
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
            {API.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default CommonExample;
