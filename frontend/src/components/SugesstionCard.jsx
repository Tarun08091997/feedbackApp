import React, { useState, useEffect } from 'react';
export default function SugesstionCard({senderInfo}) {
  const [showReplyPopup, setShowReplyPopup] = useState(false);
  const [suggestionText, setSuggestionText] = useState(''); // Empty initially to display placeholder
  const [replyText, setReplyText] = useState('');
  const [isRead, setIsRead] = useState(false); // Track if the message is read
 

  const handleDoneClick = () => {
    setShowReplyPopup(true);
  };

  const handleCancelClick = () => {
    // Clear any reply or suggestion box
    setShowReplyPopup(false);
    setReplyText('');
  };

  const handleSendClick = () => {
    console.log('Reply:', replyText);
    // Add your send logic here
    setShowReplyPopup(false);
  };

  // Simulate reading the message
  useEffect(() => {
    // Mark message as read after a timeout for demonstration purposes
    setTimeout(() => {
      setIsRead(true);
    }, 3000); // Simulate reading after 3 seconds
  }, []);

  return (
    <div className="flex w-full justify-center items-center bg-white">
      {/* Suggestion Box */}
      <div className="w-full m-5 p-6 bg-white shadow-lg shadow-black rounded">

        {/* Read-only Suggestion Text Box */}
        <textarea
          value={suggestionText}
          readOnly
          className="w-full px-3 py-2 border rounded mb-4 bg-gray-100"
          rows="6"
          placeholder="You will receive the Suggestion message here!"
        />

        {/* Sender Information */}
        <div className="mb-4 flex justify-between mx-10">
          <div className='flex flex-col'>
            <p><strong>User Name:</strong> {senderInfo.department}</p>
            <p><strong>School:</strong> {senderInfo.school}</p>
          </div>
          <div className='flex flex-col'>
            <p><strong>Date Sent:</strong> {senderInfo.dateSent}</p>
            <p><strong>Time Sent:</strong> {senderInfo.timeSent}</p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center mb-4">
          <span
            className={`w-4 h-4 rounded-full ${isRead ? 'bg-green-500' : 'bg-orange-500'}`}
          ></span>
          <span className="ml-2">{isRead ? 'Message Read' : 'Message Unread'}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDoneClick}
          >
            Done
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Reply Popup */}
      {showReplyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl mb-4">Reply</h3>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
              placeholder="Enter your reply here"
              rows="4"
            />
            <div className="flex justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSendClick}
              >
                Send
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
