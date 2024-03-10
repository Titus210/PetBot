import React from 'react'
import PrimaryButton from '../../components/ui/buttons/PrimaryButton'
import SecondaryButton from '../../components/ui/buttons/SecondaryButton'
import Input from '../../components/ui/inputs/Input'
import NavBar from '../../components/layouts/NavBar/NavBar'
import { Footer } from 'flowbite-react'

const HomePage = () => {
  return (
    <>
      <div className="">
        {/* NavBar */}
        <NavBar/>

        <Main/>

        <Footer/>
      </div>
    </>
  )
}

export default HomePage