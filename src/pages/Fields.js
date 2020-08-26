import React, { Component } from 'react';
import { Alert, Table, ButtonGroup, Button, Container } from 'reactstrap';
import Navbar from '../assets/AppNavbar';
import { Link } from 'react-router-dom';
import api from "../services/Api";

class Fields extends Component{

    constructor(props){
        super(props);
        this.state = {
            fields:[],
            error: ""
        }
    }

    componentDidMount(){
        try {
            api.get("/api/fields")
                .then(res => {
                    const fields = res.data;
                    this.setState({fields: fields});
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

        const fieldList = (this.state.fields).map(field => {
            return <tr key={field.id}>
                <td style={{whiteSpace: 'nowrap'}}>{field.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{field.latitude}</td>
                <td style={{whiteSpace: 'nowrap'}}>{field.longitude}</td>
                <td>
                    <ButtonGroup>
                        <Button outline size="sm" color="primary" tag={Link} to={"/fields/"} disabled>View</Button>
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
                            <Button outline color="success" tag={Link} to="/newField">Add Field</Button>
                        </div>
                        <h3>Fields</h3>
                        <Alert color="info">Fields have a code and GPS coordinates (Latitude and Longitude)</Alert>
                        <Table className="mt-3">
                            <thead>
                                <tr>
                                    <th width="20%">Code</th>
                                    <th width="15%">Latitude</th>
                                    <th width="15%">Longitude</th>
                                    <th width="20%">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fieldList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        );
    }
    
}

export default Fields;