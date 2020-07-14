import React, { Component } from "react";
import Container from "./Components/Container";
import Col from "./Components/Col";
import SearchForm from "./Components/SearchForm";
import ResultsList from "./Components/ResultsList";
import Axios from "axios";


class App extends Component {
  state = {
    employees: [],
    search: "",
    employeeSearch: []
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=300&nat=us").then(res => {
      // console.log(res.data);
      this.setState({ employees: res.data.results, employeeSearch: res.data.results })
      // console.log(this.state.employees)
    });

  }



  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, () => {
      let employeeFilter = this.state.employees.filter(employee =>
        employee.name.last.includes(this.state.search))
      // (this.state.search == employee.name.last))
      console.log(employeeFilter)
      return this.setState({
        employeeSearch: employeeFilter
      })
    });
    // let employeeSearch = this.state.employees.filter(employee => {
    //   if (this.state.search === employee.name.last) {
    //     return employee
    //   }
    // })

    // let employeeFilter = this.state.employees.filter(employee => (this.state.search == employee.name.last))

    // return this.setState({
    //   employeeSearch: employeeFilter
    // })
    // console.log(employeeFilter)
  };

  // When the form is submitted, search the OMDB API for the value of`this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    // this.searchEmployees(this.state.search);
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
          <ul>

            {this.state.employeeSearch.map(employee => (
              <ResultsList
                img={employee.picture.thumbnail}
                key={employee.registered.date}
                firstName={employee.name.first}
                lastName={employee.name.last}
                email={employee.email}
                dob={employee.dob.date}
              />
            ))}
          </ul>
        </Col>
      </Container>
    );
  }
}

export default App;
