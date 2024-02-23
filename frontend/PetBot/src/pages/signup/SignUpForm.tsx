import React from 'react'
import PrimaryButton from '../../components/ui/buttons/PrimaryButton'

const SignUpForm = () => {
    return (
        <>
            <form action="" method="post">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="input">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 border-2 border-gray-200 rounded-lg"
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full p-2 border-2 border-gray-200 rounded-lg"
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                name="reenter password"
                                id="confirmPassword"
                                placeholder="re-enter password"
                                className="w-full p-2 border-2 border-gray-200 rounded-lg"
                            />
                        </div>

                    </div>
                    <div className="">
                        <div className="flex gap-2">
                            <input type="checkbox" name="terms and conditions" id="terms and conditions" />
                            <label htmlFor="terms and conditions">I agree to the <span className="text-blue">Terms and Conditions</span></label>
                        </div>
                    </div>
                    <div className="button">
                        <PrimaryButton link={"landing"} colorVariation={"blue"} ButtonText="Create Account" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUpForm