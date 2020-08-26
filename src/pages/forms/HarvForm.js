import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import Navbar from '../../assets/AppNavbar.js'
import api from "../../services/Api";
import {Link} from "react-router-dom";


class HarvForm extends Component {

    state = {
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        startisok: true,
        endisok: true,
        farms: [],
        error: ""
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { start, end, farms, startisok, endisok } = this.state;
        if (!start || !end || !startisok || !endisok) {
            this.setState({ error: "Fill all the spaces correctly to proceed." });
        } else {
            try {
                await api.post("/api/harv", { start, end, farms });
                this.props.history.push("/harvs");
            } catch (err) {
                const error = err.response.data.message;
                this.setState({
                    error:
                        error
                });
            }
        }
    };

    onStartChange = e => {
        const start = e.target.value;
        this.setState({start});
        const end = this.state.end;
        if(start < end) {

            this.setState({startisok: true, endisok:true});
        } else {
            this.setState({startisok: false, endisok: false});
        }
    }

    onEndChange = e => {
        const end = e.target.value;
        this.setState({end});
        const start = this.state.start;
        if(end > start) {
            this.setState({startisok: true, endisok: true});
        } else {
            this.setState({startisok: false, endisok: false});
        }
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>Register a new Harvest</h3>
                    <Form onSubmit={this.handleSubmit}>
                        {this.state.error && <Alert color="warning">{this.state.error}</Alert>}
                        <FormGroup>
                            <Label for="startDate">Start Date:</Label>
                            <Input
                                invalid={!this.state.startisok}
                                type="date"
                                name="date"
                                id="startDate"
                                placeholder="ex: 10/07/2019"
                                value={this.state.start}
                                onChange={this.onStartChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="endDate">End Date:</Label>
                            <Input
                                invalid={!this.state.endisok}
                                type="date"
                                name="date"
                                id="endDate"
                                placeholder="ex: 17/12/2019"
                                onChange={this.onEndChange}
                            />
                        </FormGroup>
                        <Button outline color="success" type="submit">Submit</Button>
                        <Button outline color="warning" tag={Link} to="/harvs" style={{marginLeft: '0.3rem'}}>Back to Harvests</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default HarvForm;