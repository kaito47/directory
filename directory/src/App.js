import React, { Component } from "react";
import EmployeeCard from "./Components/EmployeeCard";
import API from "./utils/API"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    search: "",
    results: []
  };

  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    return (
      <div>  {this.state.employees.map(employee => (
        <EmployeeCard
          name={`${employee.name.first} ${employee.name.last}`} />
      ))}
      </div>
    )
  }

}

export default App;