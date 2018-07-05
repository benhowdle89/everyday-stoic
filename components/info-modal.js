import React, { Component } from "react";
import { ScrollView, Linking } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components";
import Text from "./text";

const StyledModalView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.75;
  background: #ddd;
  padding: 20px;
  padding-bottom: 40px;
`;

const HeadingText = styled(Text)`
  font-size: 20px;
  color: #111;
  font-weight: 500;
  margin-top: 20px;
`;

const BodyText = styled(Text)`
  font-size: 16px;
  color: #111;
  margin-top: 10px;
  ${props => props.link && `text-decoration-line: underline;`};
`;

export default class InfoModal extends Component {
  _handleLink = url => Linking.openURL(url);
  render() {
    const { visible, onClose } = this.props;
    return (
      <Modal isVisible={visible} onBackdropPress={() => onClose()}>
        <StyledModalView>
          <ScrollView>
            <HeadingText>Everyday Stoic</HeadingText>
            <BodyText>One drop of Stoicism, everyday.</BodyText>
            <HeadingText>What is Stoicism?</HeadingText>
            <BodyText>
              Stoicism was founded in Athens by Zeno of Citium in the early 3rd
              century BC, but was famously practiced by the likes of Epictetus,
              Seneca and Marcus Aurelius. The philosophy asserts that virtue
              (such as wisdom) is happiness and judgment should be based on
              behavior, rather than words. That we don’t control and cannot rely
              on external events, only ourselves and our responses.
            </BodyText>
            <BodyText>
              Stoicism has just a few central teachings. It sets out to remind
              us of how unpredictable the world can be. How brief our moment of
              life is. How to be steadfast, and strong, and in control of
              yourself. And finally, that the source of our dissatisfaction lies
              in our impulsive dependency on our reflexive senses rather than
              logic.
            </BodyText>
            <BodyText>
              Stoicism doesn’t concern itself with complicated theories about
              the world, but with helping us overcome destructive emotions and
              act on what can be acted upon. It’s built for action, not endless
              debate.
            </BodyText>
            <BodyText
              link
              onPress={() =>
                this._handleLink("https://github.com/ersel/stoic-thoughts")
              }
            >
              Source
            </BodyText>
          </ScrollView>
        </StyledModalView>
      </Modal>
    );
  }
}
