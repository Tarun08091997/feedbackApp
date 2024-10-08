import React, { useState, useEffect, useRef } from 'react';
import NavBarButtons from '../components/NavBarButtons';
import { FaUser } from "react-icons/fa";
import axios from "axios";

export default function NavbarPage({ setPage, user , setUser , setViewLogin }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () =>{
    try{
      const response = await axios.get("http://localhost:4000/user/logout", {
        withCredentials: true // Include cookies in requests
      });
      if(response.data.success){
        setViewLogin(true);
        setUser({});
        alert(response.data.message);
      }
    }catch(err){
      console.log("we are getting error" , err);
      if(err.response.data.success == false){
        alert(err.response.data.message);
      }
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='w-full bg-blue-600 h-[65px] flex items-center justify-end px-20 gap-[100px] text-white'>
      <NavBarButtons name={'See'} set={setPage} />
      <NavBarButtons name={'Create'} set={setPage} />

      {/* Profile Section */}
      <div className='relative' ref={dropdownRef}>
        <div
          className='flex  text-[12px] flex-col items-center cursor-pointer'
          onClick={toggleDropdown}
        >
          <FaUser
            alt='Profile'
            className='w-4 h-8 rounded-full'
          />
          <span className='text-white'>{user.name + " (" + user.userID + ")"}</span>
        </div>

        {isDropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2'>
            <button
              className='w-full text-left px-4 py-2 hover:bg-gray-200'
              onClick={() => handleLogout()}
            >
              Log Out
            </button>
            {/* Add more dropdown options if necessary */}
          </div>
        )}
      </div>
    </div>
  );
}

