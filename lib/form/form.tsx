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
  formData: FormValue;
  onChange: (newValue: FormValue) => void;
  button: ReactFragment;
  onSubmit: () => void;
  transformError: (message: string) => FormValue;
  errors: FormValue;
}

const Form: React.FC<Props> = (props) => {
  const {
    formData,
    fields,
    errors,
    transformError,
    button,
    onChange,
    onSubmit,
  } = props;
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    onChange(newFormData);
  };
  const submit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={submit}>
      <table>
        <tbody>
          {fields.map((f: FieldsValue) => (
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
              <td>{errors[f.name] && transformError(errors[f.name][0])}</td>
            </tr>
          ))}
          <tr>
            <td>{button}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
