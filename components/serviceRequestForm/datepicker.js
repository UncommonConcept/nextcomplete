import React from 'react'
import { PureComponent } from 'react'
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import omit from 'lodash.omit';

//import SingleDatePicker from '../src/components/SingleDatePicker';

//import { SingleDatePickerPhrases } from '../src/defaultPhrases';
//import SingleDatePickerShape from '../src/shapes/SingleDatePickerShape';
//import { HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../constants';
//import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';


// const propTypes = {
//   // example props for the demo
//   autoFocus: PropTypes.bool,
//   //initialDate: undefined,//momentPropTypes.momentObj,

//   ...omit(SingleDatePickerShape, [
//     'date',
//     'onDateChange',
//     'focused',
//     'onFocusChange',
//   ]),
// };

// const defaultProps = {
//   // example props for the demo
//   autoFocus: false,
//   initialDate: null,

//   // input related props
//   id: 'date',
//   placeholder: 'Date',
//   disabled: false,
//   required: false,
//   screenReaderInputMessage: '',
//   showClearDate: false,

//   // calendar presentation and interaction related props
//   orientation: HORIZONTAL_ORIENTATION,
//   anchorDirection: ANCHOR_LEFT,
//   horizontalMargin: 0,
//   withPortal: false,
//   withFullScreenPortal: false,
//   initialVisibleMonth: null,
//   numberOfMonths: 2,
//   keepOpenOnDateSelect: false,
//   reopenPickerOnClearDate: false,

//   // navigation related props
//   navPrev: null,
//   navNext: null,
//   onPrevMonthClick() {},
//   onNextMonthClick() {},

//   // day presentation and interaction related props
//   renderDay: null,
//   enableOutsideDays: false,
//   isDayBlocked: () => false,
//   isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
//   isDayHighlighted: () => {},

//   // internationalization props
//   // displayFormat: () => moment.localeData().longDateFormat('L'),
//   // monthFormat: 'MMMM YYYY',
//   // phrases: SingleDatePickerPhrases,
// };

class SingleDatePickerRequest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,//props.autoFocus,
      date: undefined,// props.initialDate,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;
    return (
      <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
/>
    );
  }
}

// DatePicker.propTypes = propTypes;
// DatePicker.defaultProps = defaultProps;

export default SingleDatePickerRequest;
