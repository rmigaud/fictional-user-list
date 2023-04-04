import { useState } from "react";
import Button from "../button/Button";
import UserList from "../userList/UserList";
import styles from "./AddUser.module.css";
import Card from "../card/Card";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState([]);

  const addUserHandler = (event) => {
    event.preventDefault();
    // check for length > 0
    if (username.trim().length < 1 || age.trim().length < 1 || 0 + age < 1) {
      return;
    }
    // update state
    setUserList((userList) => {
      return [
        ...userList,
        {
          name: username,
          age: age,
          key: username + age + userList.length,
        },
      ];
    });
    // clear form
    setUsername("");
    setAge("");
    console.log(userList);
  };
  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form>
        <input
          id="username"
          placeholder="Username"
          type="text"
          onChange={changeUsernameHandler}
          value={username}></input>
        <input
          id="age"
          placeholder="Age"
          type="number"
          onChange={changeAgeHandler}
          value={age}></input>
        <Button label="Submit" onClick={addUserHandler} type="submit" />
      </form>
      <UserList users={userList} />
    </Card>
  );
};

export default AddUser;
