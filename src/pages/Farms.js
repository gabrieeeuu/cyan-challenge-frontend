import React, { Component } from 'react';
import {Table, ButtonGroup, Button, Container, Alert} from 'reactstrap';
import Navbar from '../assets/AppNavbar';
import { Link } from 'react-router-dom';
import api from "../services/Api";

class Farms extends Component{

    constructor(props){
        super(props);
        this.state = {
            farms:[],
            error: ""
        }
    }

    componentDidMount(){
        try {
            api.get("/api/farms")
                .then(res => {
                    const farms = res.data;
                    this.setState({farms: farms});
                })
        } catch (err) {
            const error = err.response.data.message;
            this.setState({
                error:"Something went wrong :("
            })
            console.log(error);
        }
    }

    render(){

        const farmList = (this.state.farms).map(farm => {
            return <tr key={farm.id}>
                <td style={{whiteSpace: 'nowrap'}}>{farm.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{farm.name}</td>
                <td>{farm.fields.length}</td>
                <td>
                    <ButtonGroup>
                        <Button outline size="sm" color="info" tag={Link} to={"/farm/field/"+farm.id}>Add Field</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
   
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Container fluid>
                        <div>
                            <Button outline color="success" tag={Link} to="/newFarm/">Add Farm</Button>
                        </div>
                        <h3>Farms</h3>
                        <Alert color="info">Farms have a code, name, and have multiple Fields, but each Field can only be held by one Farm at a time</Alert>
                        <Table className="mt-3">
                            <thead>
                                <tr>
                                    <th width="20%">Code</th>
                                    <th width="15%">Name</th>
                                    <th width="15%">Fields</th>
                                    <th width="20%">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        );
    }
    
}

export default Farms;