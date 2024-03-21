import styled from 'styled-components'
import { Link } from 'react-router-dom';

// import icons
import { MdDashboard, MdOutlineExplore, MdOutlineHelp } from "react-icons/md";


import { RiLogoutCircleLine } from 'react-icons/ri'



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
      <div className="flex flex-col  w-full  h-screen relative  bg-slate-800 px-4">


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
         

            <div className="flex gap-3 items-center">
              <p><MdOutlineExplore /></p>
              <Link to='chat'>
                <p className="text-xl  bold">
                  Chat
                </p>
              </Link>
            </div>

          </div>
        </div>

        {/* settings */}
        <div className="py-4 flex flex-col items-center gap-4 right-0 left-0 text-white absolute  bottom-3">
          <div className="items-start flex flex-col">
            <div className="flex gap-3 items-center ">
              <p><MdOutlineHelp /></p>
              <Link to='help-support'>
                <p className="text-xl  bold">
                  Help & Support
                </p>
              </Link>
            </div>

            <div className="flex gap-3 items-center ">
              <p><RiLogoutCircleLine /></p>
              <Link to='logout'>
                <p className="text-xl  bold">
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;