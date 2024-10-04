
import { useState } from 'react';

export default function CreateSuggestionPage() {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedProgramme, setSelectedProgramme] = useState('');
  const [message, setMessage] = useState('');

  const schools = [
    'School of Engineering and Technology',
    'School of Law',
    'School of Pharmaceutical Sciences',
    'School of Health Sciences',
    'School of Allied Health Sciences',
    'School of Optometry',
    'School of Management, Hotel Management and Design',
    'School of Arts, Science, Humanities and Physical education',
  ];

  const department = [
    'Management',
    'Engineering',
    'Law',
    'Arts, Science & Humanities',
    'Hotel Management',
    'Pharmaceutical Sciences',
    'Design',
    'Health Sciences',
    'Allied Health Sciences',
    'Optometry',
    'Physical Education',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit logic here
    console.log("School:", selectedSchool);
    console.log("Programme:", selectedProgramme);
    console.log("Message:", message);
  };

  const handleCancel = () => {
    // Clear the form
    setSelectedSchool('');
    setSelectedProgramme('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Schools</label>
          <select
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a School</option>
            {schools.map((school, index) => (
              <option key={index} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Departments</label>
          <select
            value={selectedProgramme}
            onChange={(e) => setSelectedProgramme(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a Department</option>
            {department.map((programme, index) => (
              <option key={index} value={programme}>
                {programme}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write your message here"
            rows="4"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
