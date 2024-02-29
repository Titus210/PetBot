import React from 'react'
import PrimaryButton from '../../components/ui/buttons/PrimaryButton'
import SecondaryButton from '../../components/ui/buttons/SecondaryButton'
import Input from '../../components/ui/inputs/Input'

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to PetBot</h1>
        </div>
        <div className="flex gap-2">
          <div className="h-32 w-32 bg-slate-500  flex flex-col justify-center items-center rounded-full">
            <p className="text-md">72% </p>
            <p className="text-md">Performance </p>
          </div>
          <div className="h-32 w-32 bg-slate-500  flex flex-col justify-center items-center rounded-full">
            <p className="text-md">72% </p>
            <p className="text-md">Performance </p>
          </div>
          <div className="h-32 w-32 bg-slate-500  flex flex-col justify-center items-center rounded-full">
            <p className="text-md">72% </p>
            <p className="text-md">Performance </p>
          </div>
          <div className="h-32 w-32 bg-slate-500  flex flex-col justify-center items-center rounded-full">
            <p className="text-md">72% </p>
            <p className="text-md">Performance </p>
          </div>

        </div>
        <div className="flex">
          <div className="">
            <SecondaryButton link={"chat"} colorVariation={"blue"} ButtonText="Start Training" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage