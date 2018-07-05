import React from "react";
import { View } from "react-native";
import findQuote from "./lib/model";
import Quote from "./components/quote";
import styled from "styled-components";

const StyledWrapperView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    currentQuote: findQuote()
  };
  render() {
    const { currentQuote } = this.state;
    return (
      <StyledWrapperView>
        <Quote quote={currentQuote} />
      </StyledWrapperView>
    );
  }
}
