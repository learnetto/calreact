const Appointment = ({appointment}) => 
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>
