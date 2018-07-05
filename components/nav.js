import React, { Component } from "react";
import styled from "styled-components";
import Button from "./button";
import DatePicker from "./date-picker";

const StyledNavView = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  background: #111;
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDatePicker: false
    };
  }
  _handleTodayButtonPress = () => {
    this.props.setToday();
  };
  _handleOtherDatePress = () => {
    this.setState({
      showDatePicker: true
    });
  };
  _handleDatePickerDateChange = date => {
    this.props.setOtherDate(date);
    this.setState({
      showDatePicker: false
    });
  };
  render() {
    const { otherDate, todaySelected } = this.props;
    return (
      <StyledNavView>
        <Button
          disabled={todaySelected}
          withMargin
          onPress={this._handleTodayButtonPress}
        >
          Today
        </Button>
        <Button onPress={this._handleOtherDatePress}>Past</Button>
        {!!this.state.showDatePicker && (
          <DatePicker
            otherDate={otherDate}
            onChange={this._handleDatePickerDateChange}
          />
        )}
      </StyledNavView>
    );
  }
}
