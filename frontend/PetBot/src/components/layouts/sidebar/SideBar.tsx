import React from 'react';
import styled from 'styled-components'


// import icons
import { MdDashboard, MdOutlineExplore, MdNotifications, MdAccountCircle, MdOutlineHelp } from "react-icons/md";
import { FaChartLine } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { RiLogoutCircleLine } from 'react-icons/ri'
// travel safari logo
// import logo from '../../../assets/images/dog.jpg';

// user image
import personProfile from '../../../assets/images/dog.jpg';

import './sidebar.css'

const ProfileImage = styled.div`
  background-image: url(${personProfile});
  background-size: cover;
  background-position: center;
`;



const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="flex flex-col w-full  h-screen relative  bg-slate-800 px-4">


        {/* User details */}
        <div className="flex gap-2  flex-col items-center  text-white text-center border-b py-4" >
          {/* profile photo */}
          <div className="border-2 border-gray-500 rounded-full">
            <ProfileImage className="bg-pr flex items-center justify-center w-28 h-28 rounded-full" />
          </div>
          {/* username */}
          <div className=" ">
            {/* name */}
            <h3 className=" text-2xl">
              Zowwie
            </h3>
            <p className="text-lg italic">German Shephard</p>
          </div>
          {/* account stats */}
          <div className="flex gap-3">
            <div className="">
              <p className='text-green'>+10%</p>
              <p> Feeding</p>
            </div>
            <div className="">
              <p className='text-green'>+20%</p>
              <p> Training</p>
            </div>
            <div className="">
              <p className='text-red'>-12%</p>
              <p> Adaptability</p>
            </div>
          </div>
        </div>

        {/*  navigation */}
        <div className="py-4 flex flex-col self-center items-center gap-4  text-white ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center ">
              <p><MdDashboard /></p>
              <p className="text-md  bold">
                Home
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <p><MdOutlineExplore /></p>
              <p className="text-md  bold">
                Chat
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <p><MdNotifications /></p>
              <p className="text-md  bold">
                Notification
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <p><FaChartLine /></p>
              <p className="text-md  bold">
                Pets
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <p><FiSend /></p>
              <p className="text-md  bold">
                Account
              </p>
            </div>
          </div>
        </div>

        {/* settings */}
        <div className="py-4 flex flex-col items-center gap-4 right-0 left-0 text-white absolute  bottom-3">
          <div className="items-start flex flex-col">
            <div className="flex gap-3 items-center ">
              <p><MdOutlineHelp /></p>
              <p className="text-md  bold">
                Help & Support
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <p><RiLogoutCircleLine /></p>
              <p className="text-md  bold">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;