import React from 'react';
import './HomePage.css';

function HomePage() {
  // Dummy data 
  const notifications = [
    { id: 1, time: '2024-08-21 10:30:00', temperature: '122°C'},
    { id: 2, time: '2024-08-21 12:45:00', temperature: '124°C'},
    { id: 3, time: '2024-08-21 14:00:00', temperature: '123°C'},
    { id: 4, time: '2024-08-21 16:15:00', temperature: '121°C'},
  ];

  
  const temperatureAbove20 = notifications.some(
    (notification) => parseInt(notification.temperature) > 120
  );

  return (
    <div className="container">
      <h2>Notifications</h2>
      {temperatureAbove20 && (
        <div className="alert">
          <p>Alert: One or more temperature readings are above 120°C!</p>
        </div>
      )}
      <p>Welcome! Here are your latest notifications:</p>
      <div className="notifications">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <p><strong>Time:</strong> {notification.time}</p>
            <p><strong>Temperature:</strong> {notification.temperature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
