import { Component } from "react";
import SortedAlohaList from "../SortedAlohaList";

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
    };
  }

  setUsers = (users) => {
    this.setState({
      users,
    });
  };
  deleteUser = (users) => {
    this.setState({
      users,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SortedAlohaList
          users={users}
          setUsers={this.setUsers}
          deleteUser={this.deleteUser}
        />
      </>
    );
  }
}

export default AlohaDashboard;
