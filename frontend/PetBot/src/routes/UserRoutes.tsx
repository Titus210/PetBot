
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "../pages/getStarted/GetStarted";
import HomePage from "../pages/homePage/HomePage";
import Chat from "../pages/chat/Chat";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import SelectPet from "../pages/signup/SelectPet";
import SelectBreed from "../pages/signup/SelectBreed";
import {PetAge, PetName} from "../pages/signup/NameSelection";

const UserRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/pet-selection" element={<SelectPet />} />
                <Route path="/breed-selection" element={<SelectBreed />} />
                
                <Route path="/pet-name" element={<PetName />} />
                <Route path="/pet-age" element={<PetAge />} />
                
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default UserRoutes;
