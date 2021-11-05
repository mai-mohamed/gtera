import { Form } from "react-bootstrap";
import { IInput } from "./Input.type";
import "./Input.scss";

const Input = ({
  label,
  type,
  name,
  placeholder,
  errorMsg,
  disabled,
  className,
  handleInputChange,
}: IInput) => {
  return (
    <div className="mb-4 ">
      {label && <Form.Label className="mx-2 fsize-2"> {label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={` border-radius-10 py-2 ${className} input-field`}
        onChange={handleInputChange}
        as={type == "textarea" ? "textarea" : undefined}
        rows={type == "textarea" ? 3 : undefined}
      />

      {errorMsg && <small className="error mx-2 d-block">{errorMsg}</small>}
    </div>
  );
};
export default Input;
