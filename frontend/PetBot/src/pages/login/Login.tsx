
import { Link } from 'react-router-dom'
import PetImageCard from '../../components/ui/cards/PetImageCard'
import LoginForm from './LoginForm'

const Login = () => {
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
         <LoginForm/>
        </div>

        <div className="text-center">
          <p className="text-sm">Don't have an account? <span className='text-blue underline'><Link to= {"/signup"}>Create account</Link></span></p>
        </div>
      </div>
    </>
  )
}

export default Login