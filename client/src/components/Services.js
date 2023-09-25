import React from 'react';
import '../styles/style.css';

const data = [
    { service: "Roaming", status: "Active", action: "" },
    { service: "Data top ups", status: "Active", action: "" },
    { service: "Ringtone", status: "Deactive", action: "" },
    { service: "Other services", status: "Active", action: "" },
];

const handleAction = (action, serviceName) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(`Are you sure you want to ${action} ${serviceName}?`);

    // If the user confirms, update the data array based on the action
    if (isConfirmed) {
        console.log(`Clicked on ${serviceName} to ${action}`);
        const updatedData = [...data];
        const index = updatedData.findIndex(item => item.service === serviceName);
        if (index !== -1) {
            updatedData[index].status = action === 'Activate' ? 'Active' : 'Deactive';
            // You can update the state or perform any other necessary actions here
        }
    }
};

function Services() {
    return (
        <div className="form-container">
            <h2>Services</h2>
            <div className="form form-dashboard">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Telco service</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => (
                                <tr key={key}>
                                    <td>{val.service}</td>
                                    <td style={{ color: val.status === 'Active' ? 'green' : 'red' }}>
                                        {val.status}
                                    </td>
                                    <td>
                                        {val.status === 'Active' ? (
                                            <button onClick={() => handleAction('Deactivate', val.service)}>
                                                Deactivate
                                            </button>
                                        ) : (
                                            <button onClick={() => handleAction('Activate', val.service)}>
                                                Activate
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Services;
