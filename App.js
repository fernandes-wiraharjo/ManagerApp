import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Header } from "./src/components/common";
import reducers from "./src/reducers";
import firebase from "@firebase/app";
import "@firebase/auth";
import { config } from "./credentials/firebaseCredentials";
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk'

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);

      // firebase.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     this.setState({ loggedIn: true });
      //   } else {
      //     this.setState({ loggedIn: false });
      //   }
      // });
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Please Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
