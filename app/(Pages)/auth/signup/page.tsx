"use client"

import { Login, Visibility } from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'
// import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    return (
        <>

            <div className='py-[5rem] sm:w-[25rem] w-[19rem] mx-auto flex flex-col justify-center items-center gap-y-4'>

                {/* intro */}
                {/* <img className='w-14 object-cover' src="/bazzar_logo.png" alt="" /> */}
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>



                {/*name  */}

                <div className="name w-full">
                    <InputLabel className='my-3' htmlFor="name">Name </InputLabel>
                    <TextField className='w-full' id='name' placeholder="Alan Wake" variant="outlined"

                    />
                </div>


                {/*email  */}

                <div className="email w-full">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField className='w-full' id='email' placeholder="example@gmail.com" variant="outlined"
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
                    <TextField className='w-full' id='password' placeholder='*********' variant="outlined"
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


                {/* check box */}

                {/* <div className="checkbox w-full flex flex-row items-center">
                    <Checkbox defaultChecked />
                    <p className='text-sm '>By sigining up you agree to <span className='font-semibold underline'>Terms and Condtions</span></p>

                </div> */}

                {/* OAuth 2.0 */}
                {/* <div className='b-g-[#000000] text-2xl normal-case w-full py-3 mt-4 flex justify-evenly'>
                        <Google className='text-6xl hover:text-blue-500 transition-all' />
                        <Facebook className='text-6xl hover:text-blue-800 transition-all' />
                        <GitHub className='text-6xl hover:text-gray-700 transition-all' />
                    </div>         */}

                {/* buttons */}

                <div className="buttons w-full flex flex-col items-center gap-y-4">
                    <Button className='bg-[#000000] w-full normal-case text-2xl py-3 mt-2' variant='contained'>Create Account</Button>
                    <Button className='bg-[#000000]  text-xl normal-case w-full py-[10px] mt-4' variant='contained'>
                        <div className="flex items-center h-full justify-center gap-6 w-full">
                            <Image
                                alt='google auth'
                                height={'35'}
                                width={'35'}
                                className=''
                                src='/google-icon.webp' />
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