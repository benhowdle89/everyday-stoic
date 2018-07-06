import React, { Component } from "react";
import { View, AppState } from "react-native";
import { Constants } from "expo";
import { connect } from "react-redux";
import styled from "styled-components";

const { statusBarHeight } = Constants;
import getCurrentQuote, { getCurrentTheme } from "./../lib/selectors";
import {
  setToday,
  setOtherDate,
  setNewTheme,
  setDay,
  updateNewQuote
} from "./../lib/reducer";

import { dateToString, isDifferentDays } from "./../lib/helpers";

import Quote from "./../components/quote";
import Nav from "./../components/nav";

const StyledWrapperView = styled.View`
  flex: 1;
`;

const StatusBarPaddingIOS = styled.View`
  height: ${statusBarHeight};
  background: #111;
`;

class Home extends Component {
  state = {
    appState: AppState.currentState,
    timer: null
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    const { setDay } = this.props;
    setDay(new Date());
    this._checkNewDay();
    this._startTimer();
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    clearInterval(this.state.timer);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active" &&
      !this.props.otherDate
    ) {
      this.props.updateNewQuote();
    }
    this.setState({ appState: nextAppState });
  };
  _startTimer() {
    this.setState({
      timer: setInterval(() => {
        this._checkNewDay();
      }, 30 * 1000)
    });
  }
  _checkNewDay() {
    const { setDay, today, otherDate, updateNewQuote } = this.props;
    console.log("checking...");
    if (isDifferentDays(today, new Date())) {
      console.log("setting new day");
      setDay(new Date());
      if (!otherDate) {
        console.log("setting new quote");
        updateNewQuote();
      }
    }
  }
  render() {
    const {
      quote,
      theme,
      setOtherDate,
      setToday,
      otherDate,
      currentThemeIndex,
      themes,
      setNewTheme,
      todaySelected
    } = this.props;
    return (
      <StyledWrapperView>
        <StatusBarPaddingIOS />
        <Nav
          otherDate={otherDate}
          setOtherDate={setOtherDate}
          setToday={setToday}
          todaySelected={todaySelected}
        />
        <Quote
          otherDate={otherDate}
          theme={theme}
          quote={quote}
          currentThemeIndex={currentThemeIndex}
          themes={themes}
          setNewTheme={setNewTheme}
        />
      </StyledWrapperView>
    );
  }
}

const mapStateToProps = state => {
  const { theme, todaySelected, otherDate, themes, today } = state;
  const currentQuote = getCurrentQuote(
    state,
    !todaySelected && otherDate ? otherDate : undefined
  );
  return {
    quote: currentQuote,
    theme: getCurrentTheme(state, theme),
    otherDate,
    themes,
    currentThemeIndex: theme,
    todaySelected,
    today
  };
};

const mapDispatchToProps = {
  setToday,
  setOtherDate,
  setNewTheme,
  setDay,
  updateNewQuote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
