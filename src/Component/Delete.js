import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      response: null,
      error: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;
    const data = { name, email, password };

  };

  handleDelete = async () => {
    try {
      const response = await axios.delete(
        'https://dummy.restapiexample.com/public/api/v1/delete/2'
      );

      this.setState({
        response: response.data,
        error: null,
      });
    } catch (error) {
      this.setState({
        response: null,
        error: 'An error occurred while making the request.',
      });
    }
  };

  render() {
    const { name, email, password, response, error } = this.state;

    return (
      <div>
        <h1 className='text-center fw-bold p-3'>Delete Employee</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <button onClick={this.handleDelete}>Delete Employee</button>

        {response && (
          <div>
            <h2>Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default Delete;
