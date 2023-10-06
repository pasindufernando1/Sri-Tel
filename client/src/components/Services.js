import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';


function Services() {
    const [selectedSong, setSelectedSong] = useState('');
    const [showSongSelector, setShowSongSelector] = useState(false);
    const [ringtoneStatus, setRingtoneStatus] = useState('');

    const [data, setData] = useState([
        { service: "Roaming", status: "Deactive", action: "" },
        { service: "Data top ups", status: "Active", action: "" },
        { service: "Other services", status: "Deactive", action: "" },
        { service: "Ringtone", status: ringtoneStatus, action: "Activate", action2: "" },
    ]);

    const handleServiceStatus = async (serviceName) => {
        try {
            if (serviceName === 'Ringtone') {
                //hide action2 btn and change the status to deactivate 
                const updatedData = [...data];
                const index = updatedData.findIndex(item => item.service === "Ringtone");
                if (index !== -1) {
                    updatedData[index].status = "";
                    updatedData[index].action = "Activate";
                    updatedData[index].action2 = "";
                }
                setData([...updatedData]);

                const response = await axios.post('http://localhost:8222/api/ringing-tone/deactivate-ringing-tone', {
                    service: 'Ringtone',
                });

                alert(response.data);
            } else {
                // Find the index of the service in the data array
                const serviceIndex = data.findIndex((item) => item.service === serviceName);

                if (serviceIndex !== -1) {
                    // Toggle the status of the other service
                    data[serviceIndex].status =
                        data[serviceIndex].status === 'Active' ? 'Deactive' : 'Active';

                    // Update the state to trigger a re-render
                    setData([...data]);
                }

                if (serviceName === 'Roaming') {
                    const response = await axios.post(`http://localhost:8092/api/roaming/${data[serviceIndex].status === 'Active' ? 'subscribe' : 'unsubscribe'}`, {
                        service: 'Roaming',
                        status: data[serviceIndex].status,
                    });
                    alert(response.data);
                } else if (serviceName === 'Data top ups') {
                    const response = await axios.post(`http://localhost:8094/api/topups/${data[serviceIndex].status === 'Active' ? 'subscribe' : 'unsubscribe'}`, {
                        service: 'Data top ups',
                        status: data[serviceIndex].status,
                    });
                    alert(response.data);
                } else {
                    const response = await axios.post(`http://localhost:8095/api/othertelco/${data[serviceIndex].status === 'Active' ? 'subscribe' : 'unsubscribe'}`, {
                        service: serviceName,
                        status: data[serviceIndex].status,
                    });
                    alert(response.data);
                }
            } 
        } catch (error) {
                console.error('Error updating status:', error);
        }
    };



    


    // Function to handle changing the status data to the selected song
    const handleSongChange = () => {
        // Check if a song has been selected
        if (!selectedSong) {
            alert('Please select a song');
            return;
        }
        // confirm the song change
        const confirmChange = window.confirm('Are you sure you want to change the song?');
        if (!confirmChange) {
            return;
        }

        // Update the status data with the selected song
        const updatedData = [...data];
        const index = updatedData.findIndex(item => item.service === "Ringtone");
        if (index !== -1) {
            updatedData[index].status = selectedSong;
            // change the action button to "Change Song"
            updatedData[index].action = "Change";
            // Add a new button to deactivate the song
            updatedData[index].action2 = "Deactivate";
        }
        
        const response = axios.post('http://localhost:8093/api/ringing-tone/activate-ringing-tone', {
            service: 'Ringtone',
            status: selectedSong,
        });

        // Hide the song selector
        setShowSongSelector(false);
    };

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
                                    <td style={{ color: val.status === 'Deactive' ? 'red' : 'green' }}>
                                        {val.status}
                                    </td>
                                    <td>
                                        {val.service === 'Ringtone' && val.action === 'Activate' ? (
                                            <button onClick={() => setShowSongSelector(true)}>
                                                {val.action}
                                            </button>
                                        ) : val.service === 'Ringtone' && val.action === 'Change' ? (
                                            <div>
                                                <button onClick={() => setShowSongSelector(true)}>
                                                    {val.action}
                                                </button><br/>
                                                <button onClick={() => handleServiceStatus(val.service)}>
                                                    {val.action2}
                                                </button>
                                            </div>
                                        ) : (
                                            <button onClick={() => handleServiceStatus(val.service)}>
                                                {val.status === 'Active' ? 'Deactivate' : 'Activate'}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Song Selector */}
            {showSongSelector && (
                <div className="song-selector"><br/>
                    <h3>Available Songs List:</h3>
                    <select onChange={(e) => setSelectedSong(e.target.value)}>
                        <option value="">Select a song</option>
                        <option value="1">Test Song1</option>
                        <option value="2">Test Song2</option>
                        <option value="3">Test Song3</option>
                    </select>&nbsp;
                    <button onClick={handleSongChange}>Confirm</button>
                </div>
            )}
        </div>
    );
}

export default Services;
