import React, {Component} from 'react';
import Home from './screens/Home';
import TabNavigator from './TabNavigator';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      //   {
      //   if (isLoggedIn) {
      //     return <LogoutButton onClick={this.handleLogoutClick} />
      //   }
      //   else {
      //    return  <LoginButton onClick={this.handleLoginClick} />
      //   }
      // }
      <TabNavigator />
    );
  }
}
