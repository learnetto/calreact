var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Team standup meeting',
      input_appt_time: '25 January 2016 9am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} input_appt_time={this.state.input_appt_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});
