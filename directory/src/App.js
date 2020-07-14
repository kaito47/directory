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
// import EmployeeCard from "./Components/EmployeeCard";
// import SearchForm from "./Components/SearchForm";
import ResultsList from "./Components/ResultsList";
import Axios from "axios";


class App extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=300&nat=us").then(res => {
      // console.log(res.data);
      this.setState({ employees: res.data.results })
      console.log(this.state.employees)
    });

  }


  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, search the OMDB API for the value of`this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchEmployees(this.state.search);
  // };

  render() {
    return (
      <Container>
        {/* <Col size="md-12">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />

        </Col> */}
        <Col size="md-12">
          <ul>

            {this.state.employees.map(employee => (
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
