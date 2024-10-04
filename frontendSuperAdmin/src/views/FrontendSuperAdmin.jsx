import React from 'react';
import Header from '../components/Header';
import CreateUser from '../components/CreateUser';
import EditUser from '../components/EditUser';
import StopUser from '../components/StopUser';

export default function FrontendSuperAdmin() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold">Super Admin Dashboard</h1>
        {/* Here you can add routing logic to switch between CreateUser, EditUser, and StopUser components */}
        <CreateUser />
        <EditUser />
        <StopUser />
      </div>
    </div>
  );
}
