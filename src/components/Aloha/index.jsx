import { Component } from "react";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };
  deleteUser = () => {
    const { users, id, setUsers } = this.props;
    setUsers(users.filter((user) => user.id !== id));
  };
  render() {
    const { name = "React" } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1 className="heading">
          {isGreeting ? "Hello" : "Goodbye"}, {name}
        </h1>
        <button onClick={this.switchState}>Switch</button>
        <button onClick={this.deleteUser}>Delete</button>
      </>
    );
  }
}

export default Aloha;
