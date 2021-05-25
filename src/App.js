import "./App.css";
import React, { Component } from "react";
import SelectedUserList from "./components/SelectedUserList";
import UserList from "./components/UserList";

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

/*function App() {
  return (
    <UserList />
  )
}*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({
        ...user,
        isSelected: false,
      })),
    };
  }

  setUsers = (newUsers) => this.setState({ users: newUsers });

  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <SelectedUserList users={users} />
        </header>
        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    );
  }
}

export default App;
