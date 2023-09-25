import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

const data = [
    { billNo: "xxx", billName: "xxx", dueDate: "10-11-2023", amount: "xxx", payDate: "1-11-2023" },
    { billNo: "xxx", billName: "xxx", dueDate: "3-11-2023", amount: "xxx", payDate: "1-11-2023" },
    { billNo: "xxx", billName: "xxx", dueDate: "7-10-2023", amount: "xxx", payDate: "1-10-2023" },
    { billNo: "xxx", billName: "xxx", dueDate: "24-10-2023", amount: "xxx", payDate: "1-10-2023" },
];

function PaymentHistory() {

    const navigate = useNavigate();

    const navigateToBills = () => {
        navigate('/bills');
    };

    return (
        <div className="form-container">
            <h2>Payment History</h2>
            <div>
                <button onClick={navigateToBills}>View Current Bills</button>
            </div><br />
            <div className="form form-dashboard table-bill">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Bill number</th>
                                <th>Bill name</th>
                                <th>Due date</th>
                                <th>Amount</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => (
                                <tr key={key}>
                                    <td>{val.billNo}</td>
                                    <td>{val.billName}</td>
                                    <td>{val.dueDate}</td>
                                    <td>{val.amount}</td>
                                    <td>{val.payDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PaymentHistory;
