import React, { Component } from "react";

const authContext = React.createContext();
export const authConsumer = authContext.Consumer;

export class authProvider extends Component {
  state = {
    isLoggedin: false,
    userName: "",
    password: "",
  };

  logIn = (userName, password) => {
    this.setState({ isLoggedin: true, userName: userName, password: password });
  };

  logOut = () => {
    this.setState({ isLoggedin: false, userName: "", password: "" });
  };

  render() {
    const { isLoggedin, userName, password } = this.state;
    const { logIn, logOut } = this;
    return (
      <authContext.Provider
        value={{
          isLoggedin,
          userName,
          password,
          logIn,
          logOut,
        }}
      >
        {this.props.children}
      </authContext.Provider>
    );
  }
}

export default authContext;
