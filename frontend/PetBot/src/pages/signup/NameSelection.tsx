import PrimaryButton from "../../components/ui/buttons/PrimaryButton"
import Input from "../../components/ui/inputs/Input"

export const  PetName = () => {
    return (
        <>
            <div className="flex flex-col gap-4">

                <div className="">
                    <h1 className="text-2xl font-bold text-black ">Enter PetName</h1>
                </div>
                <div className="">
                <Input placeholder="Enter your pet's name"/>
                </div>

                <div className="">
                    <PrimaryButton link="pet-age" ButtonText="Next" colorVariation="blue" />
                </div>
            </div>
        </>
    )
}


export const PetAge = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-bold text-black ">Enter Pet Age</h1>
                </div>
                
                <div className="">
                    <Input placeholder="Enter your pet's age"/>
                </div>

                <div className="">
                    <PrimaryButton link="login" ButtonText="Next" colorVariation="blue" />
                </div>
            </div>
        </>
    )
}

