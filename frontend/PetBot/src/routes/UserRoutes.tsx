
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "../pages/common/getStarted/GetStarted";
import HomePage from "../pages/users/homePage/HomePage";
import Chat from "../pages/users/chat/Chat";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signup/SignUp";
import SelectPet from "../pages/auth/signup/SelectPet";
import SelectBreed from "../pages/auth/signup/SelectBreed";
import { PetAge, PetName } from "../pages/auth/signup/NameSelection";
import Logout from "../pages/auth/logout/Logout";
import HelpSupport from "../pages/common/helpSupport/HelpSupport";
import PetInfoForm from "../pages/auth/signup/PetInfoForm";


const UserRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GetStarted />} />

                <Route path="/homepage/" element={<HomePage />} >
                    <Route path="/homepage/home" element={<Chat />} />
                    <Route path="/homepage/chat" element={<Chat />} />
                    <Route path="/homepage/logout" element={<Logout />} />
                    
                    <Route path="/homepage/help-support" element={<HelpSupport />} />
                </Route>


                <Route path="/chat" element={<Chat />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/pet-info" element={<PetInfoForm />} />

    
                <Route path="help-support" element={< HelpSupport />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default UserRoutes;

/*

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "../pages/getStarted/GetStarted";
import HomePage from "../pages/homePage/HomePage";
import Chat from "../pages/chat/Chat";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import SelectPet from "../pages/signup/SelectPet";
import SelectBreed from "../pages/signup/SelectBreed";
import { PetAge, PetName } from "../pages/signup/NameSelection";
import AccountInfo from "../pages/account/Account";
import HelpSupport from '../pages/helpSupport/HelpSupport';

const UserRoutes = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<GetStarted />} />

                <Route path="/homepage/" element={<HomePage />} >
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/logout"  element = {<Logout/>}/>
                    <Route path="/account-information" element={<AccountInfo />}/>
                </Route>

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/pet-selection" element={<SelectPet />} />
                <Route path="/breed-selection" element={<SelectBreed />} />
                <Route path="/pet-name" element={<PetName />} />
                <Route path="/pet-age" element={<PetAge />} />

                

                <Route path ="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default UserRoutes;

*/
