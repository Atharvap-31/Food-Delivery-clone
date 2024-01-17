import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, contact } = this.props;

    return (
      <div>
        <h2>Name: {name} </h2>
        <h3>Location: {location} </h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
