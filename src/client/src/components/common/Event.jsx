import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
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
                     id="date"
                     label="Birthday"
                     type="date"
                     defaultValue="2017-05-24"
                     className="main-textField"
                     InputLabelProps={{
                       shrink: true,
                     }}/>
                    Name* : <input type="text"/>
                    Duration: <input type="time"/>
                    Start Date: <input type="datetime-local"/>
                    End Date: <input type="datetime-local"/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}
