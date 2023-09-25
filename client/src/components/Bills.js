import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

const data = [
    { billNo: "xxx", billName: "xxx", dueDate: "10-11-2023", amount: "xxx", action: "" },
    { billNo: "xxx", billName: "xxx", dueDate: "3-11-2023", amount: "xxx", action: "" },
    { billNo: "xxx", billName: "xxx", dueDate: "7-10-2023", amount: "xxx", action: "" },
    { billNo: "xxx", billName: "xxx", dueDate: "24-10-2023", amount: "xxx", action: "" },
];

function Bills() {

    const navigate = useNavigate();

    const navigateToHistory = () => {
        navigate('/payment-history');
    };

    return (
        <div className="form-container">
            <h2>Bill Viewing & Payment</h2>
            <div>
                <button onClick={navigateToHistory}>Payment History</button>
            </div><br/>
            <div className="form form-dashboard table-bill">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Bill number</th>
                                <th>Bill name</th>
                                <th>Due date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => (
                                <tr key={key}>
                                    <td>{val.billNo}</td>
                                    <td>{val.billName}</td>
                                    <td>{val.dueDate}</td>
                                    <td>{val.amount}</td>
                                    <td><button>Pay now</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Bills;
