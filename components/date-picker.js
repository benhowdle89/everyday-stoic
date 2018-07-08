import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

export default class Picker extends Component {
  componentDidUpdate = nextProps => {
    if ((this.props.show || nextProps.show) && this.datePickerRef) {
      this.datePickerRef.onPressDate();
    }
  };
  render() {
    const { onChange, otherDate, show } = this.props;
    if (!show) return null;
    return (
      <DatePicker
        style={{ width: 0, height: 0, right: -9999 }}
        date={otherDate ? new Date(otherDate) : new Date()}
        mode="date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        maxDate={new Date()}
        showIcon={false}
        ref={ref => (this.datePickerRef = ref)}
        onDateChange={onChange}
        onCloseModal={onChange}
        onPressMask={onChange}
        customStyles={{
          btnTextConfirm: {
            color: "#111",
            fontFamily: "Avenir Next"
          },
          btnTextCancel: {
            fontFamily: "Avenir Next"
          }
        }}
      />
    );
  }
}
