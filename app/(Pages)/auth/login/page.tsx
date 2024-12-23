/* eslint-disable @next/next/no-img-element */
import { Login, Visibility } from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'
import Image from 'next/image'


const login = () => {
    return (
        <>

            <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-y-3'>

                {/* intro */}
                {/* <img className='w-14 object-cover' src="/bazzar_logo.png" alt="" /> */}
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>

                {/*email  */}

                <div className="email">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField className='sm:w-[27rem] max-[450]:w-[24rem] w-[19rem]' id='email' placeholder="example@gmail.com" variant="outlined"
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

                <div className="Password">

                    <InputLabel className='my-3' htmlFor='password'>Password</InputLabel>
                    <TextField className='sm:w-[27rem] max-[450]:w-[24rem] w-[19rem]' id='password' placeholder='*********' variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Visibility />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                {/* buttons */}
                <div className="buttons flex flex-col items-center gap-y-4">

                    {/* OAuth 2.0 */}
                    {/* <div className='b-g-[#000000] text-2xl normal-case sm:w-[27rem] max-[450]:w-[24rem] w-[19rem] py-3 mt-4 flex justify-evenly'>
                        <Google className='text-6xl hover:text-blue-500 transition-all' />
                        <Facebook className='text-6xl hover:text-blue-800 transition-all' />
                        <GitHub className='text-6xl hover:text-gray-700 transition-all' />
                    </div> */}


                    {/* login buttons */}
                    <Button className='bg-[#000000]  text-xl normal-case sm:w-[27rem] max-[450]:w-[24rem] w-[19rem] py-3 mt-4' variant='contained'>Login</Button>

                    <Button className='bg-[#000000]  text-xl normal-case sm:w-[27rem] max-[450]:w-[24rem] w-[19rem] py-[10px] mt-4' variant='contained'>
                      <div className="flex items-center h-full justify-center gap-6 w-full">
                        <Image
                        alt='google auth'
                        height={'35'}
                        width={'35'}
                        className=''
                        src='/google-icon.webp'/>
                        <p>Sign in with google</p>
                        </div>
                    </Button>


                    {/* Options */}

                    <p className='text-sm mt-2'>Don&apos;t have an account <span className='font-semibold underline'>Register here</span></p>


                </div>

            </div>
        </>
    )
}

export default login
