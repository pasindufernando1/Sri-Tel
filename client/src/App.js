import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'; // Import the RegistrationForm component
import LoginForm from './components/LoginForm'; // Import the LoginForm component
import NotFound from './components/NotFound'; // Create a NotFound component to handle unknown routes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sri-Tel</h1>
      </header>
      <main>

        <Router>
            <Routes>
              {/* Define the root route */}
              <Route exact path="/" element={<RegistrationForm/>} />

              {/* Define the login route */}
              <Route path="/login" element={<LoginForm/>} />

              {/* Handle unknown routes */}
              <Route element={<NotFound/>} />
          </Routes>
        </Router>

      </main>
    </div>

  );
}

export default App;
