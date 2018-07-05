import React from "react";
import styled from "styled-components";
import Text from "./text";

const StyledButton = styled.TouchableOpacity`
  border: 1px solid #fff;
  border-radius: 10px;
  padding-horizontal: 10px;
  margin-left: ${props => (props.withMargin ? "10px" : "0px")};
`;

const StyledButtonText = styled(Text)`
  color: #fff;
  font-size: 12;
`;

export default ({ children, onPress, withMargin }) => (
  <StyledButton withMargin onPress={onPress}>
    <StyledButtonText>{children.toUpperCase()}</StyledButtonText>
  </StyledButton>
);
