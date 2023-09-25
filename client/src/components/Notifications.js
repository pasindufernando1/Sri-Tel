import React from 'react';

function Notifications() {

    return (
        <div className="notifications-page">
            <h2>Notifications</h2>

            {/* List of notifications */}
            <div className="notification-list">
                <div>
                    <p>Notification 1</p>
                </div>
                <div>
                    <p>Notification 2</p>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
