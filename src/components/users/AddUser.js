import Button from "../button/Button";
const AddUser = (props) => {
  const pressed = () => {
    console.log("pressed");
  };
  return (
    <form>
      <label htmlFor="username">{props.label}</label>
      <input id="username" placeholder={props.label}></input>
      <Button label={props.label} onClick={pressed} />
    </form>
  );
};

export default AddUser;
