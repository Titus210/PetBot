
import cat from '../../assets/images/cat.jpg';
import dog from '../../assets/images/dog.jpg';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';

const SelectPet = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-screen ">
      <div className="">
        <h1 className="text-2xl font-bold">Choose Pet</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6  w-5/6 ">

        <div className="card flex border  shadow-lg w-full  rounded-3xl  ">
          <img src={cat} alt="Dog" className="w-full  rounded-3xl" />
        </div>

        <div className="card flex border  shadow-lg w-full  rounded-3xl  ">
          <img src={dog} alt="Dog" className="w-full object-cover rounded-3xl" />
        </div>
      </div>

      <div className="button">
        <PrimaryButton link={"breed-selection"} colorVariation={"blue"} ButtonText="Next" />
      </div>
    </div>
  );
};

export default SelectPet;
