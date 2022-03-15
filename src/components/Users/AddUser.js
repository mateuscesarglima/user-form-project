import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (+userAge < 1) {
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    //styles.input está sendo passado para o componente card como props para utilização da estilização por lá.
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            value={userName}
            id="username"
            placeholder="Enter your name"
            onChange={userNameChangeHandler}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <Input
            type="number"
            id="age"
            name="age"
            value={userAge}
            placeholder="Enter your age"
            onChange={ageChangeHandler}
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
