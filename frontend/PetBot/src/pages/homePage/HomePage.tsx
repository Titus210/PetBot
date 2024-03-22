import React from 'react'

import SideBar from '../../components/layouts/sidebar/SideBar'
import Chat from '../chat/Chat'
import { Route, Routes } from 'react-router-dom'
import Logout from '../logout/Logout'
import HelpSupport from '../helpSupport/HelpSupport'
import Home from '../home/Home'

const HomePage = () => {
  return (
    <>
      <div className="flex w-screen bg-slate-200">
        <div className="flex w-max relative">
          <SideBar />
        </div>
        <div className="chat-container w-11/12">
          <Routes>
            <Route path="/chat" element={<Chat />} />
        
            <Route path="/logout" element={<Logout />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default HomePage;
