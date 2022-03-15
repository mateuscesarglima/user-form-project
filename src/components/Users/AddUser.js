import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Input from "../UI/Input";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    //Não recarrega a página
    event.preventDefault();
    //Lógica para validação de campos.
    //a função trim() retira todos os espaços em branco da string.
    //Se após todos os espaços em branco o tamanho da string for igual a 0
    // Ou se o tamanho da string idade for igual a 0
    //A condição entenderá que o campo está vazio e irá retornar.
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0)",
      });
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
