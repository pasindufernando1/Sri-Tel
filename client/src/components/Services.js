import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';


function Services() {
    const [selectedSong, setSelectedSong] = useState('');
    const [showSongSelector, setShowSongSelector] = useState(false);
    const [ringtoneStatus, setRingtoneStatus] = useState('');

    const [data, setData] = useState([
        { service: "Roaming", status: "Deactivate", action: "" },
        { service: "Data top ups", status: "Deactivate", action: "" },
        { service: "Other services", status: "Deactivate", action: "" },
        { service: "Ringtone", status: ringtoneStatus === "" ? "Deactivate" : ringtoneStatus, action: "Activate", action2: "" },
    ]);

    const handleServiceStatus = async (serviceName) => {
        try {
            if (serviceName === 'Ringtone') {
                //hide action2 btn and change the status to deactivate 
                const updatedData = [...data];
                const index = updatedData.findIndex(item => item.service === "Ringtone");
                if (index !== -1) {
                    updatedData[index].status = "Deactivate";
                    updatedData[index].action = "Activate";
                    updatedData[index].action2 = "";
                }
                setData([...updatedData]);

                const response = await axios.post(`http://localhost:8082/telco/ringingTone/unsub/${selectedSong}`);

                alert(response.data.message);
                setRingtoneStatus("Deactivate");
            } else {
                // Find the index of the service in the data array
                const serviceIndex = data.findIndex((item) => item.service === serviceName);

                if (serviceIndex !== -1) {
                    // Toggle the status of the other service
                    data[serviceIndex].status =
                        data[serviceIndex].status === 'Active' ? 'Deactivate' : 'Active';

                    // Update the state to trigger a re-render
                    setData([...data]);
                }

                if (serviceName === 'Roaming') {
                    const response = await axios.post(`http://localhost:8082/telco/roaming/${data[serviceIndex].status === 'Active' ? 'sub' : 'unsub'}`);
                    alert(response.data.message);
                    console.log(response);
                } else if (serviceName === 'Data top ups') {
                    const response = await axios.post(`http://localhost:8082/telco/dataTopUp/${data[serviceIndex].status === 'Active' ? 'sub' : 'unsub'}`, {
                        service: 'Data top ups',
                        status: data[serviceIndex].status,
                    });
                    alert(response.data);
                } else {
                    const response = await axios.post(`http://localhost:8082/api/othertelco/${data[serviceIndex].status === 'Active' ? 'subscribe' : 'unsubscribe'}`, {
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
    const handleSongChange = async () => {
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
            updatedData[index].status = "Song " + selectedSong + " Activated";
            // change the action button to "Change Song"
            updatedData[index].action = "Change";
            // Add a new button to deactivate the song
            updatedData[index].action2 = "Deactivate";
        }
        console.log(selectedSong);
        
        try {
            const response = await axios.post(`http://localhost:8082/telco/ringingTone/sub/${selectedSong}`);
            alert(response.data.message);
    
            // Hide the song selector
            setShowSongSelector(false);
        } catch (error) {
            // Handle any errors that may occur during the request.
            console.error('Error:', error);
        }

        // Hide the song selector
        setShowSongSelector(false);
    };

    return (
        <>
        <a href="/dashboard" className="back-to-dashboard" >Back to Dashboard</a>
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
                                    <td style={{ color: val.status === 'Deactivate' ? 'red' : 'green' }}>
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
        </div></>
    );
}

export default Services;
