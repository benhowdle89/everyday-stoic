import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components";
import format from "date-fns/format";
import { Ionicons } from "@expo/vector-icons";
import Text from "./text";
import ThemeModal from "./theme-modal";

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

const StyledThemeButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 30;
`;

const formatDate = date => {
  const dateObj = date ? new Date(date) : new Date();
  return format(dateObj, "Do MMM");
};

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThemeModal: false
    };
  }
  _handleThemePress = () => {
    this.setState({
      showThemeModal: !this.state.showThemeModal
    });
  };
  _handleThemeModalClose = theme => {
    if (typeof theme != "undefined" || theme === 0) {
      this.props.setNewTheme(theme);
    }
    return this.setState({
      showThemeModal: false
    });
  };
  render() {
    const {
      quote: { text, author, source },
      otherDate,
      currentThemeIndex,
      themes,
      theme
    } = this.props;
    const { showThemeModal } = this.state;
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
        <StyledThemeButton onPress={this._handleThemePress}>
          <Ionicons name="md-eye" size={32} color={theme.text} />
        </StyledThemeButton>
        <ThemeModal
          onClose={this._handleThemeModalClose}
          visible={showThemeModal}
          currentThemeIndex={currentThemeIndex}
          themes={themes}
        />
      </StyledBGView>
    );
  }
}
