import React, { useState, useEffect } from 'react';

const EditUser = ({ userIdToEdit }) => {
  const [school, setSchool] = useState('');
  const [department, setDepartment] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); // Set password to what is already there

  // This would typically be fetched from the API by userIdToEdit
  useEffect(() => {
    // Example data, replace with API fetch
    const userData = {
      school: 'School of Engineering and Technology',
      department: 'Engineering',
      userId: '12345',
      userName: 'John Doe',
      password: 'CTU@123'
    };
    setSchool(userData.school);
    setDepartment(userData.department);
    setUserId(userData.userId);
    setUserName(userData.userName);
    setPassword(userData.password);
  }, [userIdToEdit]);

  const handleEdit = () => {
    // Function to handle editing user
    const updatedUser = { school, department, userId, userName, password };
    console.log('Editing user:', updatedUser);
    // You can add API call to edit the user here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <div className="mb-4">
        <label className="block">Schools</label>
        <select
          className="border p-2 rounded w-full"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        >
          <option>Select a School</option>
          <option>School of Engineering and Technology</option>
          <option>School of Law</option>
          {/* Add more schools here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block">Departments</label>
        <select
          className="border p-2 rounded w-full"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>Select a Department</option>
          <option>Management</option>
          <option>Engineering</option>
          <option>Law</option>
          {/* Add more departments here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block">User ID</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          readOnly // Make it read-only for the edit page
        />
      </div>
      <div className="mb-4">
        <label className="block">User Name</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block">Password</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditUser;
