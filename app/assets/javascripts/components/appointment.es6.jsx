const Appointment = ({appointment}) => {
  return (
    <div className='appointment'>
      <h3>{appointment.title}</h3>
      <p>{formatDate(appointment.appt_time)}</p>
    </div>
  )
}
