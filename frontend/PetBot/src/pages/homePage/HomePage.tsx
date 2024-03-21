import React from 'react'

import SideBar from '../../components/layouts/sidebar/SideBar'
import Chat from '../chat/Chat'
import { Route, Routes } from 'react-router-dom'
import Logout from '../logout/Logout'
import Settings from '../account/Account'
import HelpSupport from '../helpSupport/HelpSupport'

const HomePage = () => {
  return (
    <>
      <div className="flex w-screen bg-slate-200">
        <div className="flex w-max relative">
          <SideBar />
        </div>
        <div className="chat-container">
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/notification" element={<Logout />} />
            <Route path="/account-information" element={<Settings />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default HomePage;
