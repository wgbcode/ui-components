import React, { ReactFragment } from "react";

export interface FormValue {
  [key: string]: any;
} // 将类型导到父组件

interface FieldsValue {
  name: string;
  label: string;
  input: { type: string };
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  fields: Array<FieldsValue>;
  value: FormValue;
  onChange: (newValue: FormValue) => void;
  button: ReactFragment;
  onSubmit: () => void;
}

const Form: React.FC<Props> = (props) => {
  const formData = props.value;
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    props.onChange(newFormData);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      {props.children}
      <table>
        <tbody>
          {props.fields.map((f: FieldsValue) => (
            <tr key={f.name}>
              <td>
                <span>{f.label}</span>
              </td>
              <td>
                <input
                  type={f.input.type}
                  value={formData[f.name]} // 需先声明 key 的类型，与 f.name 保持一致
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td>{props.button}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
