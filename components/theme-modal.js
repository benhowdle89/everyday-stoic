import React, { Component } from "react";
import Modal from "react-native-modal";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Text from "./text";

const StyledModalView = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledThemeView = styled.TouchableOpacity`
  background-color: ${props => props.theme.background};
  margin: 10px;
  padding: 10px;
  position: relative;
`;
const StyledThemeText = styled(Text)`
  color: ${props => props.theme.text};
`;

const StyledActiveIcon = styled(Ionicons)`
  position: absolute;
  top: -10;
  right: -8;
`;

export default class ThemeModal extends Component {
  _handleThemeSelection = index => {
    this.props.onClose(index);
  };
  render() {
    const { visible, onClose, themes, currentThemeIndex } = this.props;
    return (
      <Modal isVisible={visible} onBackdropPress={() => onClose()}>
        <StyledModalView>
          {themes.map((theme, index) => {
            const isCurrent = index === currentThemeIndex;
            return (
              <StyledThemeView
                onPress={() => this._handleThemeSelection(index)}
                theme={theme}
                key={`${theme.text}|${theme.background}`}
              >
                {!!isCurrent && (
                  <StyledActiveIcon
                    name="md-checkmark-circle"
                    size={24}
                    color="#01FF70"
                  />
                )}
                <StyledThemeText theme={theme}>Everyday Stoic</StyledThemeText>
              </StyledThemeView>
            );
          })}
        </StyledModalView>
      </Modal>
    );
  }
}
