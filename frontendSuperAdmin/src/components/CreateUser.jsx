import React, { useState } from 'react';

export default function CreateUserForm() {
  const [school, setSchool] = useState('');
  const [department, setDepartment] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('CTU@123'); // Default password

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Handle form submission and create user logic here
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create New User</h2>
      <form onSubmit={handleCreateUser}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">Schools</label>
            <select
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
            >
              <option>Select a School</option>
              <option>School of Engineering</option>
              <option>School of Law</option>
              {/* Add more schools */}
            </select>
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Departments</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
            >
              <option>Select a Department</option>
              <option>Engineering</option>
              <option>Law</option>
              {/* Add more departments */}
            </select>
          </div>

          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
              type="text"
              placeholder="Enter User ID"
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
              type="text"
              placeholder="Enter User Name"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              value={password}
              readOnly
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-gray-200"
              type="text"
              placeholder="CTU@123"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
