import React, { Component } from 'react';
import axios from 'axios';

class GetEmployeeData extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: null,
      error: null,
    };
    this.debouncedFetch = this.debounce(this.fetchEmployeeData, 1000); 
  }

  componentDidMount() {
    this.debouncedFetch(); 
  }

  fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        'https://dummy.restapiexample.com/api/v1/employee/1'
      );

      this.setState({
        employeeData: response.data.data,
        error: null,
      });
    } catch (error) {
      this.setState({
        employeeData: null,
        error: 'An error occurred while fetching the employee data.',
      });
    }
  };

  debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }

  render() {
    const { employeeData, error } = this.state;

    return (
      <div>
        <h1 className='text-center fw-bold p-3'>Get Employee Data</h1>

        {employeeData ? (
          <div>
            <h2>Employee Data:</h2>
            <p>Name: {employeeData.employee_name}</p>
            <p>Salary: {employeeData.employee_salary}</p>
            <p>Age: {employeeData.employee_age}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default GetEmployeeData;
