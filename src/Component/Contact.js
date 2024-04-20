import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
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

    try {
      const token = 'YOUR_AUTHENTICATION_TOKEN'; 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        'https://dummy.restapiexample.com/api/v1/create',
        data,
        config
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

      alert('Registration failed. Please check your credentials. ' + error.message);
    }
  };

  render() {
    const { name, email, password, response, error } = this.state;

    return (
      <div>
        <h1 className='text-center p-3 fw-bold'>Create Employee</h1>
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

export default Contact;
