import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  const handleAgree = (id) => {
    
    console.log(`Agree clicked for ID: ${id}`);
  };

  const handleDecline = (id) => {
    
    console.log(`Decline clicked for ID: ${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, email, password };
    console.log(newItem);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      toast.success('Registered successfully');
      setName('');
      setEmail('');
      setPassword('');
      fetchUsers(); 

      
      navigate('/signup');
    } catch (error) {
      toast.error('Failed: ' + error.message);
    }
  };

  return (
    <div className='container'>
      <div className='user-list'>
        <h2 className='fw-bold text-center p-2'>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button onClick={() => handleAgree(user.id)} className='btn btn-success'>Agree</button>
                <button onClick={() => handleDecline(user.id)} className='btn btn-danger'>Decline</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Signup;
