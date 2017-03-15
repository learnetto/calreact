import React from 'react';
import Datetime from 'react-datetime';
import moment from'moment';
import { validations } from '../utils/validations';

export default class AppointmentForm extends React.Component {
  static formValidations = {
    title: [
      (s) => { return(validations.checkMinLength(s, 3)) }
    ],
    appt_time: [
      (t) => { return(validations.timeShouldBeInTheFuture(t))}
    ]
  }

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.props.onUserInput(fieldName, fieldValue,
                            AppointmentForm.formValidations[fieldName]);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime = (e) => {
    const fieldName = 'appt_time';
    const fieldValue = e.toDate();
    this.props.onUserInput(fieldName, fieldValue,
                            AppointmentForm.formValidations[fieldName]);
  }

  render () {
    const inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title.value}
            onChange={this.handleChange} />

          <Datetime input={false} open={true} inputProps={inputProps}
            value={moment(this.props.appt_time.value)}
            onChange={this.setApptTime} />

          <input type='submit' value='Make Appointment' 
            className='submit-button'
            disabled={!this.props.formValid} />
        </form>        
      </div>
    )
  }
}
