import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

export default class Picker extends Component {
  componentDidMount() {
    this.datePickerRef.onPressDate();
  }
  componentDidUpdate() {
    this.datePickerRef.onPressDate();
  }
  render() {
    const { onChange, otherDate } = this.props;
    console.log(otherDate);
    return (
      <DatePicker
        style={{ width: 0, height: 0, flex: 0, right: -9999 }}
        date={otherDate ? new Date(otherDate) : new Date()}
        mode="date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        ref={ref => (this.datePickerRef = ref)}
        customStyles={{
          dateInput: {}
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onChange}
      />
    );
  }
}
