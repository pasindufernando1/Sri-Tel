import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const payment_ULR = 'http://localhost:8222/api/bill-payment';

function PayNow() {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: '',
    });

    // State variable to control the visibility of the confirmation dialog
    const [showConfirmation, setShowConfirmation] = useState(false);

    const navigate = useNavigate();

    // Use the useLocation hook to access the location state
    const location = useLocation();
    const billData = location.state?.billData; // Access the passed data from location.state

    // Check if billData is defined before rendering
    if (!billData) {
        // Handle the case where data is not available
        return (
            <div>
                <h2>Payment Details</h2>
                <p>No payment data available.</p>
            </div>
        );
    }

    // Function to show the confirmation dialog
    const showConfirmationDialog = () => {
        // Check if any of the form fields is empty
        if (!formData.cardHolderName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCVV) {
            // You can show an error message or handle this case as needed
            alert("Please fill in all the required fields before proceeding.");
        } else {
            setShowConfirmation(true);
        }
    }


    // Function to handle the confirmation action (e.g., payment)
    const handleConfirmation = () => {
        // Implement your payment logic here
        // After successful payment, you can redirect or show a success message
        // For this example, we'll just close the confirmation dialog
        setShowConfirmation(false);
    }

    // Function to close the confirmation dialog
    const closeConfirmationDialog = () => {
        setShowConfirmation(false);
        navigate('/bills');
    }

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate and send registration data to the server/API
        const { cardHolderName, cardNumber, cardExpiry, cardCVV,} = formData;

        try {
            const response = axios.post(payment_ULR, {
                cardHolderName,
                cardNumber,
                cardExpiry,
                cardCVV,
            });

            // Handle response from the server (e.g., show success message, handle errors)
            alert(response.data);

            // Optionally, you can navigate to a different page after successful registration
            navigate('/bills');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Render the payment details using billData
    return (
        <div>
            <h2>Payment Details</h2>
            <div>
                <p>Bill Number: {billData.billNumber}</p>
                <p>Bill Name: {billData.billName}</p>
                <p>Due Date: {billData.dueDate}</p>
                <p>Amount: {billData.amount}</p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="cardHolderName"
                            value={formData.cardHolderName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Card Number:</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Expiration (mm/yy):</label>
                        <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Security Code:</label>
                        <input
                            type="text"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleInputChange}
                            required
                        />
                    </div><br />
                    <button onClick={showConfirmationDialog}>Pay now</button><br />
                </form>
                {/* Confirmation Dialog */}
                {showConfirmation && (
                    <div className="confirmation-dialog">
                        <p>Are you sure you want to make the payment?</p>
                        <button onClick={handleConfirmation}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={closeConfirmationDialog}>No</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PayNow;
