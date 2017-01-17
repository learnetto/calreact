var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholder='Appointment Title' value={this.props.input_title} />
          <input name='appt_time' placeholder='Date and Time' value={this.props.input_appt_time} />
          <input type='submit' value='Make Appointment' />
        </form>        
      </div>
    )
  }
});
