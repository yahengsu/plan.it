import React, { Component } from "react";
import Event from "../common/Event";
import { Button, TextField } from "@material-ui/core";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <p>Welcome! Click below to get started, or enter your trip code below to continue where you left off.</p>
        <Link to="/create">
        <Button>Get Started</Button>
        </Link>
        <TextField/>
        <Button onClick={}>Continue Planning</Button>
        <Event />
      </div>
    );
  }
}
