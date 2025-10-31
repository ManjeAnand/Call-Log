import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AddCall from './AddCall';
import CallList from './CallList';
import './App.css';

function App() {
  const [calls, setCalls] = useState([]);

  // Add a new call
  const addCall = (newCall) => {
    setCalls([...calls, { ...newCall, id: Date.now() }]);
  };

  // Delete a call by ID
  const deleteCall = (id) => {
    setCalls(calls.filter((call) => call.id !== id));
  };

  return (
    <Router>
      <div className="call-list-app">
        <h2>📞 Call List Application</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-call">Add Call</Link>
          <Link to="/call-list">View Calls</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-call" element={<AddCall addCall={addCall} />} />
          <Route path="/call-list" element={<CallList calls={calls} deleteCall={deleteCall} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
