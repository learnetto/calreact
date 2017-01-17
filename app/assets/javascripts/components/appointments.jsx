var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.appointments.map(function(appointment){
          return (
            <div>
              <h3>{appointment.title}</h3>
              <p>{appointment.appt_time}</p>
            </div>
          )
        })}
      </div>
    )
  }
});
