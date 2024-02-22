import { Link } from 'react-router-dom';
import PetImageCard from '../../components/ui/cards/PetImageCard';


const GetStarted = () => {
  return (
    <>
     <>
      <div className="h-screen bg-white flex flex-col items-center justify-center md:w-7/12 mx-auto ">
        <div className="flex flex-col items-center justify-between md:h-auto">
          <div className=""></div>

          <div className="intro">
            {/* Pet card */}
            <PetImageCard />

            <h1 className="text-blue text-3xl font-bold text-center">
              Welcome to <span className="yellow">PetBot </span>
              <br />{" "}
              <span className="text-md text-gray-500">
                Your Personal Pet Assistant
              </span>
            </h1>
          </div>

          <div className="button flex flex-col gap-3 w-full ">
           
            <div className="w-11/12 mx-auto text-center">
              <Link to="/chat">
                <p className="px-4 py-2 bg-blue text-white rounded-lg">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default GetStarted;