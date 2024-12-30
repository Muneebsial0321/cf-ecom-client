/* eslint-disable @next/next/no-img-element */
"use client"
import { googleAuth, login } from '@/app/_api'
import { loginType } from '@/app/types'
import { Email, Visibility, VisibilityOff } from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Login() {

    // states
    const [loginData, setLogin] = useState<loginType>({ email: "", password: "" })
    const [passToggle, setPassToggle] = useState<boolean>(true) //true-->pass , false-->text


    // methods
    const __togglePassword__ = () => setPassToggle((prev) => !prev)

    const __Submit__ = async () => {
        console.log({ loginData })
        await login(loginData)

    }
    const __onchange__ = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogin((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <>

            <div className='w-[100vw] h-[100vh] mt-[4rem] flex flex-col justify-center items-center gap-y-3'>

                {/* intro */}
                <img className='w-[5rem] object-cover' src="/logo.png" alt="" />
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>

                {/*email  */}

                <div className="email">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField
                        name="email"
                        onChange={__onchange__}
                        className='sm:w-[25rem] w-[19rem]' id='email' placeholder="example@gmail.com" variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {/* <Login /> */}
                                    <Email />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                {/* password */}

                <div className="Password">

                    <InputLabel className='my-3' htmlFor='password'>Password</InputLabel>
                    <TextField
                        name="password"
                        onChange={__onchange__}
                        type={passToggle ? 'password' : "text"}
                        className='sm:w-[25rem] w-[19rem]' id='password' placeholder='*********' variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    onClick={__togglePassword__}
                                    className='cursor-pointer'
                                    position="end">

                                    {passToggle ? <Visibility /> : <VisibilityOff />}
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div className="sm:w-[25rem] w-[19rem] flex justify-end text-red-600 hover:text-red-700">
                    <span className='cursor-pointer'>Forget Password?</span>
                </div>

                {/* buttons */}
                <div className="buttons flex flex-col items-center gap-y-4 sm:w-[25rem] w-[19rem]">

                    {/* login buttons */}
                    <Button
                        onClick={__Submit__}
                        className='btn bg-[#f65353] hover:bg-[#dc3e3e] mt-4' variant='contained'>Sign in</Button>


                    <center><p className="text-[1.26rem] font-semibold">or</p></center>


                    {/* facebook auth btn */}
                    <Button
                        onClick={googleAuth}
                        className='btn py-[10px] mt-2' variant='contained'>
                        <div className="flex items-center h-full justify-center gap-x-1 w-full">
                            <Image
                                alt='face auth'
                                height={'26'}
                                width={'26'}
                                className=''
                                src='/face-icon.png' />
                            <p>Sign in with Facebook</p>
                        </div>
                    </Button>


                    {/* google auth btn */}
                    <Button
                        onClick={googleAuth}
                        className='btn bg-[#555f80] hover:bg-[#464f6b] py-[10px] mt-2' variant='contained'>
                        <div className="flex items-center h-full justify-center gap-x-1 w-full">
                            <Image
                                alt='google auth'
                                height={'26'}
                                width={'26'}
                                className=''
                                src='/google-icon.png' />
                            <p>Sign in with google</p>
                        </div>
                    </Button>


                    {/* Options */}

                    <Link href={'/auth/signup'}><p className='text-sm mt-2'>Don&apos;t have an account <span className='font-semibold hover:underline'>Signup here</span></p></Link>


                </div>

            </div>
        </>
    )
}
