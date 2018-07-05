import React from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

import configureStore from "./lib/store";

import Home from "./containers/home";

export default class App extends React.Component {
  state = {
    isReady: false,
    store: null
  };
  _setupStore = async () => {
    return new Promise(async resolve => {
      const store = await configureStore();
      this.setState({ store }, resolve);
    });
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._setupStore}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={this.state.store}>
        <Home />
      </Provider>
    );
  }
}
