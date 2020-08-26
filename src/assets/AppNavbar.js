import React, { Component } from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import {logout, isAuthenticated} from "../services/Auth";

import api from "../services/Api";

function showLogout(props) {
    if(!isAuthenticated() && !props.name) {
        return null;
    }

    return (<NavItem>
        <Button outline color="danger" onClick={logout} tag={Link} to="/">Logout from {props.name}</Button>
    </NavItem>);

}

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: "",
            error: ""
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        if(isAuthenticated()){
            try {
                api.get("/api/auth/user")
                    .then(res => {
                        const name = res.data;
                        this.setState({name: name});
                    });
            } catch (err) {
                const error = err.response.data.message;
                console.log(error);
            }
        }
    }

    render() {

        return <Navbar color="dark" dark expand="md">
            <div className="container" id="containerNav">
                <NavbarBrand tag={Link} to="/home">Home</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/gabrieeeuu/cyan_challenge" target="_blank">Github</NavLink>
                        </NavItem>
                        <NavItem>
                            {showLogout(this.state.name)}
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>;
    }
}