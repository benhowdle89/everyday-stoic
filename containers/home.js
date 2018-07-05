import React, { Component } from "react";
import { View } from "react-native";
import { Constants } from "expo";
import { connect } from "react-redux";
import styled from "styled-components";

const { statusBarHeight } = Constants;
import getCurrentQuote, { getCurrentTheme } from "./../lib/selectors";
import { setToday, setOtherDate } from "./../lib/reducer";

import Quote from "./../components/quote";
import Nav from "./../components/nav";

const StyledWrapperView = styled.View`
  flex: 1;
`;

const StatusBarPaddingIOS = styled.View`
  height: ${statusBarHeight};
`;

class Home extends Component {
  render() {
    const { quote, theme, setOtherDate, setToday, otherDate } = this.props;
    return (
      <StyledWrapperView>
        <StatusBarPaddingIOS />
        <Nav
          otherDate={otherDate}
          setOtherDate={setOtherDate}
          setToday={setToday}
        />
        <Quote otherDate={otherDate} theme={theme} quote={quote} />
      </StyledWrapperView>
    );
  }
}

const mapStateToProps = state => {
  const { theme, todaySelected, otherDate } = state;
  const currentQuote = getCurrentQuote(
    state,
    !todaySelected && otherDate ? otherDate : undefined
  );
  return {
    quote: currentQuote,
    theme: getCurrentTheme(state, theme),
    otherDate
  };
};

const mapDispatchToProps = {
  setToday,
  setOtherDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);