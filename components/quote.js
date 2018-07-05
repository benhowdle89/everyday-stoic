import React, { Component } from "react";
import { View, Share, ScrollView } from "react-native";
import styled from "styled-components";
import format from "date-fns/format";
import { Ionicons } from "@expo/vector-icons";
import Text from "./text";
import ThemeModal from "./theme-modal";
import InfoModal from "./info-modal";

const StyledBGView = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  padding-horizontal: 30;
`;

const QuoteText = styled(Text)`
  color: ${props => props.theme.text};
  font-size: 18;
  margin-top: 30;
`;

const MetaView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30;
  margin-bottom: 20;
`;

const QuoteAuthorText = styled(Text)`
  color: ${props => props.theme.text};
  font-weight: bold;
`;

const QuoteSourceText = styled(Text)`
  color: ${props => props.theme.text};
`;

const DateText = styled(Text)`
  color: ${props => props.theme.text};
  text-decoration-line: underline;
  font-size: 14;
`;

const StyledThemeButton = styled.TouchableOpacity`
  margin-horizontal: 10;
`;

const ButtonsView = styled.View`
  align-self: center;
  margin-top: 60;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledScrollView = styled.ScrollView`
  flex: 0.75;
`;

const formatDate = date => {
  const dateObj = date ? new Date(date) : new Date();
  return format(dateObj, "Do MMM");
};

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThemeModal: false,
      showInfoModal: false
    };
  }
  _handleThemePress = () => {
    this.setState({
      showThemeModal: true
    });
  };
  _handleInfoPress = () => {
    this.setState({
      showInfoModal: true
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
  _handleInfoModalClose = () => {
    this.setState({
      showInfoModal: false
    });
  };
  _share = ({ text, author, source }) => {
    const message = `${text} - ${author}, ${source}`;
    Share.share({
      message,
      title: "Everyday Stoic",
      url: "https://benhowdle.im/everyday-stoic"
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
    const { showThemeModal, showInfoModal } = this.state;
    return (
      <StyledBGView {...this.props}>
        <DateText {...this.props}>{formatDate(otherDate)}</DateText>
        <StyledScrollView>
          <QuoteText {...this.props}>{text}</QuoteText>
        </StyledScrollView>
        <MetaView>
          <QuoteAuthorText {...this.props}>
            {author.toUpperCase()}
          </QuoteAuthorText>
          <QuoteSourceText {...this.props}>{source}</QuoteSourceText>
        </MetaView>

        <ButtonsView>
          <StyledThemeButton onPress={this._handleThemePress}>
            <Ionicons name="ios-color-palette" size={32} color={theme.text} />
          </StyledThemeButton>
          <StyledThemeButton
            onPress={() => this._share({ text, author, source })}
            style={{
              marginTop: -3
            }}
          >
            <Ionicons name="ios-share" size={38} color={theme.text} />
          </StyledThemeButton>
          <StyledThemeButton onPress={this._handleInfoPress}>
            <Ionicons
              name="ios-information-circle"
              size={32}
              color={theme.text}
            />
          </StyledThemeButton>
        </ButtonsView>
        <ThemeModal
          onClose={this._handleThemeModalClose}
          visible={showThemeModal}
          currentThemeIndex={currentThemeIndex}
          themes={themes}
        />
        <InfoModal
          onClose={this._handleInfoModalClose}
          visible={showInfoModal}
        />
      </StyledBGView>
    );
  }
}
