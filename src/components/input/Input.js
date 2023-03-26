import Button from "../button/Button";
const Input = (props) => {
  const pressed = () => {
    console.log("pressed");
  };
  return (
    <div>
      <label>{props.label}</label>
      <input placeholder={props.label}></input>
      <Button label={props.label} onClick={pressed} />
    </div>
  );
};

export default Input;
