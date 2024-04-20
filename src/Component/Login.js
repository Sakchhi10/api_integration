import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

       
        const credentials = {
            username,
            password,
        };

        try {
           
            const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                
                console.log('Authentication successful');
            } else {
               
                setError('Authentication failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
        }
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={handleLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <a className="btn btn-success" href="/register">New User</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
