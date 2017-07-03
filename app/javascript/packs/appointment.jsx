import React from 'react'
import moment from 'moment'
import { formatDate } from './utils'

const Appointment = ({appointment}) => 
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

export default Appointment
