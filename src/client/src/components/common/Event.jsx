import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log(event);
  }
  render() {
    return (
      <div className="event-main">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="event-name"
            label="Name"
            type="text"
            variant="outlined"
            className="EventName"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="event-start-date"
            label="Start Date"
            type="date"
            variant="outlined"
            className="EventStartDate"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="event-start-time"
            label="Start Time"
            type="time"
            variant="outlined"
            className="EventStartTime"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="event-end-date"
            label="End Date"
            type="date"
            variant="outlined"
            className="EventEndDate"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="event-end-time"
            label="End Time"
            type="time"
            variant="outlined"
            className="EventEndTime"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </div>
    );
  }
}
