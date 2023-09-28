import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css'
import axios from 'axios';

const login_url = 'http://localhost:8090/api/authenticate/login'

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/registration');
    };

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }); // Update the formData state
    }

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validate and send login data to the server/API
        const { email, password } = formData;
    
        try {
            const response = await axios.post(login_url, {
                email,
                password,
            });
            
            alert(response.data);
            
            // Handle response from the server (e.g., authentication success, error handling)
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const { email, password } = formData; // Use formData, not this.state

    return (
        <div className="form-container">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </div><br/>
                <button type="submit">Login</button><br/>
            </form>
            Do not have an account? <button onClick={navigateToRegister}>Register</button>
        </div>
    );
}

export default LoginForm;
