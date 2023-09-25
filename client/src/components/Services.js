import React, { useState } from 'react';
import '../styles/style.css';

const data = [
    { service: "Roaming", status: "Active", action: "" },
    { service: "Data top ups", status: "Active", action: "" },
    { service: "Other services", status: "Deactive", action: "" },
    { service: "Ringtone", status: "Test Song", action: "Change" },
];

function Services() {
    const [selectedSong, setSelectedSong] = useState('');
    const [showSongSelector, setShowSongSelector] = useState(false);

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
        }
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
                                        {val.service === 'Ringtone' && val.action === 'Change' ? (
                                            <button onClick={() => setShowSongSelector(true)}>
                                                Change
                                            </button>
                                        ) : (
                                            <button>
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
                        <option value="Song 1">Test Song1</option>
                        <option value="Song 2">Test Song2</option>
                        <option value="Song 3">Test Song3</option>
                    </select>&nbsp;
                    <button onClick={handleSongChange}>Confirm</button>
                </div>
            )}
        </div>
    );
}

export default Services;
