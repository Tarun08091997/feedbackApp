import React, { useState } from 'react';

const StopUser = () => {
  const [userId, setUserId] = useState('');

  const handleStop = () => {
    // Function to handle stopping user
    console.log('Stopping user with ID:', userId);
    // You can add API call to stop the user here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stop User</h1>
      <div className="mb-4">
        <label className="block">User ID</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopUser;
