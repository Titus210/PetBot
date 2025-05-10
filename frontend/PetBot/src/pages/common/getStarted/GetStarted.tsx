import PetImageCard from '../../../components/ui/cards/PetImageCard';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';


const GetStarted = () => {
  return (
    <>
      <>
        <div className="">
          <div className="flex flex-col items-center justify-between md:h-auto">
            <div className=""></div>

            <div className="intro">
              {/* Pet card */}
              <div className="">
                <PetImageCard />
              </div>

              <div className="">
                <h1 className="text-blue text-3xl font-bold text-center">
                  Welcome to <span className="yellow">PetBot </span>
                  <br />{" "}
                  <span className="text-md text-gray-500">
                    Your Personal Pet Assistant
                  </span>
                </h1>
              </div>
            </div>

            <div className="button flex flex-col gap-3 w-full ">
              <PrimaryButton link={"login"} colorVariation={"blue"} ButtonText='Get Started'/>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default GetStarted;