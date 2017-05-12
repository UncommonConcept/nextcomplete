import React from 'react'
import { PureComponent } from 'react'
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SingleDatePickerRequest extends PureComponent {
  constructor(props) {
    super(props);
    console.log("single data picker props", props)
    this.state = {
      focused: false,//props.autoFocus,
      date: undefined,// props.initialDate,
    };

  }

  onFocusChanged = ({ focused }) => {
    this.setState({ focused });
    console.log("insideFOCUS change");
  }

  onDateChanged = (date) => {
    this.setState({ date });
    this.props.dateChange(date);
  }

  render() {
    const { focused, date } = this.state;
    return (
      <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChanged} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={this.onFocusChanged} // PropTypes.func.isRequired
      />
    );
  }
}

// DatePicker.propTypes = propTypes;
// DatePicker.defaultProps = defaultProps;

export default SingleDatePickerRequest;
