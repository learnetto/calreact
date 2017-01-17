var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={this.props.appointments} />
      </div>
    )
  }
});
