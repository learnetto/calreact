var Appointment = React.createClass({
  render: function() {
    return (
      <div className='appointment'>
        <h3>{this.props.appointment.title}</h3>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
      </div>
    )
  }
});
