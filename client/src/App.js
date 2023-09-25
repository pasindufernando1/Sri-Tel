import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'; // Import the RegistrationForm component
import LoginForm from './components/LoginForm'; // Import the LoginForm component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Services from './components/Services'; // Import the Services component
import Bills from './components/Bills'; // Import the Bills component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sri-Tel</h1>
      </header>
      <main>

        <Router>
            <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/bills" element={<Bills/>} />
          </Routes>
        </Router>

      </main>
    </div>

  );
}

export default App;
