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
  render() {
    const { name = "React" } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1 className="heading">
          {isGreeting ? "Hello" : "Goodbye"}, {name}
        </h1>
        <button onClick={this.switchState}>Switch</button>
      </>
    );
  }
}

export default Aloha;
