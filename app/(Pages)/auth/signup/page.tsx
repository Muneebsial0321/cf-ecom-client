"use client"

import { googleAuth, register } from '@/app/_api';
import { registerType } from '@/app/types';
import { Login, Visibility } from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'
// import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {

    // states
    const [registerData, setRegisterData] = useState<registerType>({ email: "", password: "", name: "" })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [passToggle, setPassToggle] = useState<boolean>(true) //true-->pass , false-->text


    // methods
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const __togglePassword__ = () => setPassToggle((prev) => !prev)

    const __Submit__ = async () => {
        console.log({ registerData })
        await register(registerData)

    }
    const __onchange__ = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>

            <div className='py-[5rem] sm:w-[25rem] w-[19rem] mx-auto flex flex-col justify-center items-center gap-y-4'>

                {/* intro */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-[5rem] object-cover' src="/logo.png" alt="" />
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>



                {/*name  */}

                <div className="name w-full">
                    <InputLabel className='my-3' htmlFor="name">Name </InputLabel>
                    <TextField
                    name='name'
                    onChange={__onchange__}
                    className='w-full' id='name' placeholder="Alan Wake" variant="outlined"

                    />
                </div>


                {/*email  */}

                <div className="email w-full">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField
                     name='email'
                     onChange={__onchange__}
                    className='w-full' id='email' placeholder="example@gmail.com" variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Login />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                {/* password */}

                <div className="Password w-full">

                    <InputLabel className='my-3' htmlFor='password'>Password</InputLabel>
                    <TextField
                     name='password'
                     onChange={__onchange__}
                    className='w-full' id='password' placeholder='*********' variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Visibility />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                {/* Check password */}

                {/* <div className="check Password w-full">

                    <InputLabel className='my-3' htmlFor='cpassword'>Check Password</InputLabel>
                    <TextField className='w-full' id='cpassword' placeholder='*********' variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Visibility />
                                </InputAdornment>
                            )
                        }}
                    />
                </div> */}



                {/* buttons */}

                <div className="buttons w-full flex flex-col items-center gap-y-4">

                    {/* submit */}
                    <Button 
                    onClick={__Submit__}
                    className='btn mt-2' variant='contained'>Create Account</Button>
                    


                    {/* google auth btn */}
                    <Button
                    onClick={googleAuth}
                    className='btn bg-[#555f80] hover:bg-[#464f6b] py-[10px] mt-4' variant='contained'>
                        <div className="flex items-center h-full justify-center gap-1 w-full">
                            <Image
                                alt='google auth'
                                height={'32'}
                                width={'32'}
                                className=''
                                src='/google-icon.png' />
                            <p>Sign in with google</p>
                        </div>
                    </Button>

                    {/* Options */}

                    <p className='text-sm mt-2'>Already have an account <span className='font-semibold border-black border-b-[2px]'><Link href={'/auth/login'}>Login</Link></span></p>


                </div>

            </div>
        </>
    )
}

export default Register