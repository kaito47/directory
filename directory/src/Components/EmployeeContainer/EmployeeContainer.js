import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";
import employees from "../employees.json";
// import ResultsList from "../ResultsList";
// import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        employees
    };


    // When this component mounts, search for the movie "The Matrix"
    // componentDidMount() {
    //     this.getEmployees();
    // }

    // getEmployees = query => {
    //     API.search(query)
    //         .then(res => this.setState({ result: res.results }))
    //         .catch(err => console.log(err));
    //     console.log(res.results);
    // };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployees(this.state.search);
    // };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                    <Col size="md-12">
                        {this.state.employees.map(employee => (
                            <EmployeeCard
                                img={employee.picture.thumbnail}
                                key={employee.registered.date}
                                firstName={employee.name.first}
                                lastName={employee.name.last}
                                email={employee.email}
                                dob={employee.dob}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EmployeeContainer;
