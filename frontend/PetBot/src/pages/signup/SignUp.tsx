import React from 'react'
import { Link } from 'react-router-dom'
import PetImageCard from '../../components/ui/cards/PetImageCard'
import LoginForm from '../login/LoginForm'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <>
       <div className="flex flex-col gap-4">
        <div className="logo text-center">
          <PetImageCard />
          <h1 className="text-blue text-3xl font-bold text-center">
            Welcome Back
          </h1>
          <p className="text-grey text-md italic">Sign In to Continue</p>
        </div>

        <div className="form">
         <SignUpForm/>
        </div>

        <div className="text-center">
          <p className="text-sm">Already have an account? <span className='text-blue underline'><Link to= {"/login"}>Login</Link></span></p>
        </div>
      </div>
    </>
  )
}

export default SignUp