import React from 'react';

function CallList({ calls, deleteCall }) {
  return (
    <div>
      <h2>Recent Calls</h2>
      {calls.length === 0 ? (
        <p>No calls added yet.</p>
      ) : (
        <ul>
          {calls.map((call) => (
            <li key={call.id}>
              <strong>{call.name}</strong> ({call.number}) – {call.time}
              <button
                onClick={() => deleteCall(call.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CallList;
