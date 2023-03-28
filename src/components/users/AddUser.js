import Button from "../button/Button";
import styles from "./AddUser.module.css";

import Card from "../card/Card";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("pressed");
  };
  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" placeholder={props.label} type="text"></input>
        <label htmlFor="age">Age:</label>
        <input id="age" placeholder={props.label} type="number"></input>
        <Button label={props.label} onClick={addUserHandler} type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
