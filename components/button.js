import React from "react";
import styled from "styled-components";
import Text from "./text";

const StyledButton = styled.TouchableOpacity`
  padding-horizontal: 10px;
  margin-left: ${props => (props.withMargin ? "10px" : "0px")};
  opacity: ${props => (props.disabled ? "0.8" : 1)};
`;

const StyledButtonText = styled(Text)`
  color: #fff;
  font-size: 16;
  opacity: ${props => (props.disabled ? "0.8" : 1)};
`;

export default ({ children, onPress, withMargin, disabled = false }) => (
  <StyledButton disabled={disabled} withMargin onPress={onPress}>
    <StyledButtonText disabled={disabled}>{children}</StyledButtonText>
  </StyledButton>
);
