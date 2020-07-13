// import React from "react";
// import Container from "./Components/Container";


// function App() {
//   return <Container />;
// }
// export default App;

import React, { Component } from "react";
import Container from "./Components/Container";
// import Row from "./components/Row";
import Col from "./Components/Col";
import EmployeeCard from "./Components/EmployeeCard";
import SearchForm from "./Components/SearchForm";
// import ResultsList from "../ResultsList";
import API from "./utils/API";
import Axios from "axios";


class App extends Component {
  state = {
    employees: []
  };


  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.getEmployees();
  // }

  // getEmployees = query => {
  //   API.search(query)
  //     .then(employees => this.setState({ employees: employees.data }))
  //     .catch(err => console.log(err));
  // };
  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=300&nat=us").then(res => {
      console.log(res);
      this.setState({ employees: res.data })
    });

  }
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of`this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Col size="md-12">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />

        </Col>
        <Col size="md-12">
          {this.state.employees.map(employee => (
            <EmployeeCard
              img={employee.results.picture.thumbnail}
              key={employee.results.registered.date}
              firstName={employee.results.name.first}
              lastName={employee.results.name.last}
              email={employee.results.email}
              dob={employee.results.dob.date}
            />
          ))}
        </Col>
      </Container>
    );
  }
}

export default App;
