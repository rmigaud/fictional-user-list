import Card from "../card/Card";
const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
