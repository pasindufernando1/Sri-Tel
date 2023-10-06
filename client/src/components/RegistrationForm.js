import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../styles/style.css';

const register_ULR = 'http://localhost:8222/api/register';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
    });

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    };

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate and send registration data to the server/API
        const { firstName, lastName, email, contactNumber, password } = formData;

        try {
            const response = await axios.post(register_ULR, {
                firstName,
                lastName,
                email,
                contactNumber,
                password,
            });

            // Handle response from the server (e.g., show success message, handle errors)
            alert(response.data);

            // Optionally, you can navigate to a different page after successful registration
            navigateToLogin();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* contact number */}
                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div><br/>
                <button type="submit">Register</button><br/>
            </form>
           Already have an account? <button onClick={navigateToLogin}>Login</button>
        </div>
    );
}

export default RegistrationForm;
