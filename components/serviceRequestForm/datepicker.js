import React from 'react'
import { PureComponent } from 'react'
import { DateField, Calendar } from 'react-date-picker';
import moment from 'moment';

class DatePicker extends PureComponent {
  render () {
    return( 
    <div>
       <DateField
            dateFormat="MM-DD-YYYY HH:mm:ss"
            value={moment().format('l')}
            />
    </div>
    )
  }
}

export default DatePicker

