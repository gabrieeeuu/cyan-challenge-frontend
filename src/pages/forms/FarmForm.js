import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import Navbar from '../../assets/AppNavbar.js'
import api from "../../services/Api";
import {Link} from "react-router-dom";


class FarmForm extends Component {

    state = {
        name: "",
        fields: [],
        error: ""
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { name, fields } = this.state;
        if (!name) {
            this.setState({ error: "Fill all the spaces correctly to proceed" });
        } else {
            try {
                await api.post("/api/farm", { name, fields });
                this.props.history.push("/farms");
            } catch (err) {
                const error = err.response.data.message;
                this.setState({
                    error:
                        error
                });
            }
        }
    };

    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>Register a new Farm</h3>
                    <Form onSubmit={this.handleSubmit}>
                        {this.state.error && <Alert color="warning">{this.state.error}</Alert>}
                        <FormGroup>
                            <Label for="name">Farm Name:</Label>
                            <Input
                                type="text"
                                name="name"
                                id="farmFormName"
                                placeholder="ex: FarmHacia (white spaces will be removed)"
                                onChange={e => this.setState({ name: e.target.value.replace(/\s/g,'') })}
                            />
                        </FormGroup>
                        <Button outline color="success" type="submit">Submit</Button>
                        <Button outline color="warning" tag={Link} to="/farms" style={{marginLeft: '0.3rem'}}>Back to Farms</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default FarmForm;