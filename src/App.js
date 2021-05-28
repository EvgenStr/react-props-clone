import "./App.css";
import React, { useState } from "react";
import SelectedUserList from "./components/SelectedUserList";
import UserList from "./components/UserList";
import Timer from './components/Timer';
import Counter from './components/Counter';

const usersDB = [
  {
    id: 1,
    firstname: "John",
    lastname: "Smith",
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Brown",
  },
  {
    id: 3,
    firstname: "Sara",
    lastname: "Smith",
  },
  {
    id: 4,
    firstname: "Mary",
    lastname: "Black",
  },
];

function App(props) {
  const defaultUsers = usersDB.map((user) => ({
    ...user,
    isSelected: false,
  }));
  const [users, setUsers] = useState(defaultUsers);
  const [isHidden, setIsHidden] = useState(false);
  const hideHandler = () => setIsHidden(!isHidden);
  return (
    <>
      <header>
        <SelectedUserList users={users} />
      </header>
      <main>
        <button onClick={hideHandler}>Hide</button>
        {!isHidden && <UserList users={users} setUsers={setUsers} />}
        <Timer />
        <Counter />
      </main>
    </>
  );
}

export default App;
