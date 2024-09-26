import { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="flex justify-center items-center h-screen bg-[rgba(0,0,0,0.2)]">
      <div className="w-full w-[70%] md:w-[40%] p-[4%] rounded-lg shadow-lg shadow-black bg-red-600">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">user ID</label>
          <input
            type="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your userId"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
