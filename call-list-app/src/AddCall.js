import React, { useState } from 'react';

function AddCall({ addCall }) {
  const [call, setCall] = useState({ name: "", number: "", time: "" });

  const handleChange = (e) => {
    setCall({ ...call, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCall(call);
    alert(`Call added for ${call.name} (${call.number}) at ${call.time}`);
    setCall({ name: "", number: "", time: "" }); // reset form
  };

  return (
    <div>
      <h2>Add Call</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Caller Name"
          value={call.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={call.number}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="time"
          placeholder="Time (e.g., 10:30 AM)"
          value={call.time}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Add Call</button>
      </form>
    </div>
  );
}

export default AddCall;
