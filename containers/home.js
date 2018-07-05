import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import getCurrentQuote, { getCurrentTheme } from "./../lib/selectors";
import Quote from "./../components/quote";
import styled from "styled-components";

const StyledWrapperView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-horizontal: -10;
`;

class Home extends Component {
  render() {
    const { quote, theme } = this.props;
    return (
      <StyledWrapperView>
        <Quote theme={theme} quote={quote} />
      </StyledWrapperView>
    );
  }
}

const mapStateToProps = state => {
  const currentQuote = getCurrentQuote(state);
  const { theme } = state;
  return {
    quote: currentQuote,
    theme: getCurrentTheme(state, theme)
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
