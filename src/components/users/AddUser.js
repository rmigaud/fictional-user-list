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
        <input id="username" placeholder="Username" type="text"></input>
        <input id="age" placeholder="Age" type="number"></input>
        <Button label="Submit" onClick={addUserHandler} type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
