import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components";
import format from "date-fns/format";
import Text from "./text";

const StyledBGView = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  padding-horizontal: 30;
`;

const QuoteText = styled(Text)`
  color: ${props => props.theme.text};
  font-size: 18;
  margin-top: 20;
`;

const MetaView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20;
`;

const QuoteAuthorText = styled(Text)`
  color: ${props => props.theme.text};
  font-weight: bold;
`;

const QuoteSourceText = styled(Text)`
  color: ${props => props.theme.text};
  font-style: italic;
`;

const DateText = styled(Text)`
  color: ${props => props.theme.text};
  text-decoration-line: underline;
  font-size: 12;
`;

const formatDate = date => {
  const dateObj = date ? new Date(date) : new Date();
  return format(dateObj, "Do MMM");
};

export default class Quote extends Component {
  render() {
    const {
      quote: { text, author, source },
      otherDate
    } = this.props;
    return (
      <StyledBGView {...this.props}>
        <DateText {...this.props}>{formatDate(otherDate)}</DateText>
        <QuoteText {...this.props}>{text}</QuoteText>
        <MetaView>
          <QuoteAuthorText {...this.props}>
            {author.toUpperCase()}
          </QuoteAuthorText>
          <QuoteSourceText {...this.props}>{source}</QuoteSourceText>
        </MetaView>
      </StyledBGView>
    );
  }
}
