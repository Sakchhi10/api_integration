import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
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

    const { name, email, message } = this.state;
    const data = { name, email, message };

    try {
      const response = await axios.put(
        'https://dummy.restapiexample.com/public/api/v1/update/21',
        data
      );

      this.setState({
        response: response.data,
        error: null,
      });
    } catch (error) {
      this.setState({
        response: null,
        error: 'An error occurred while updating the contact.',
      });
    }
  };

  render() {
    const { name, email, message, response, error } = this.state;

    return (
      <div>
        <h1 className='text-center fw-bold p-3'>Edit Contact</h1>
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
            <label>Message:</label>
            <input
              type="text"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
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

export default Update;
