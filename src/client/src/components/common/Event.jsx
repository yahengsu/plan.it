import React, { Component } from "react";
import "../../styles/Event.scss";
import { Button, TextField } from "@material-ui/core/";
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
    const textProps = {
      variant: "outlined",
      InputLabelProps: { shrink: true }
    };
    return (
      <div className="event-main">
        <TextField
          required
          id="event-name"
          label="Name"
          type="text"
          className="event-textfield"
          {...textProps}
        />
        <TextField
          required
          id="event-start-date"
          label="Start Date"
          type="date"
          className="event-textfield"
          {...textProps}
        />
        <TextField
          required
          id="event-start-time"
          label="Start Time"
          type="time"
          className="event-textfield"
          {...textProps}
        />
        <TextField
          required
          id="event-end-date"
          label="End Date"
          type="date"
          className="event-textfield"
          {...textProps}
        />
        <TextField
          required
          id="event-end-time"
          label="End Time"
          type="time"
          className="event-textfield"
          {...textProps}
        />
        <TextField
          id="location"
          label="Location"
          type="text"
          className="location-textfield"
          {...textProps}
          />
        <Button variant="contained" className="event-button">Submit</Button>
      </div>
    );
  }
}
