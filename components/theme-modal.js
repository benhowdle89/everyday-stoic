import React, { Component } from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Text from "./text";

const { width } = Dimensions.get("window");

const StyledModalView = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledThemeView = styled.TouchableOpacity`
  background-color: ${props => props.theme.background};
  margin: 10px;
  padding: 15px;
  position: relative;
  width: ${width * 0.75};
`;
const StyledThemeText = styled(Text)`
  color: ${props => props.theme.text};
  font-size: 16;
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
