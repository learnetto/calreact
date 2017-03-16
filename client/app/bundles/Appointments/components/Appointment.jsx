import React, { PropTypes } from 'react';

import { formatDate } from '../utils/format';

export const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired
}
