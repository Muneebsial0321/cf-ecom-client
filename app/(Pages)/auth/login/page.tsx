import { Google, Facebook, Login, Visibility, GitHub } from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'


const login = () => {
    return (
        <>

            <div className='w-[100vw] py-[5rem] flex flex-col justify-center items-center gap-y-4'>

                {/* intro */}
                {/* <img className='w-14 object-cover' src="/bazzar_logo.png" alt="" /> */}
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>





                {/*email  */}

                <div className="email">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField className='w-[30rem]' id='email' placeholder="example@gmail.com" variant="outlined"
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
                    <TextField className='w-[30rem]' id='password' placeholder='*********' variant="outlined"
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
                    <div className='b-g-[#000000] text-2xl normal-case w-[30rem] py-3 mt-4 flex justify-evenly'>
                        <Google className='text-6xl hover:text-blue-500 transition-all' />
                        <Facebook className='text-6xl hover:text-blue-800 transition-all' />
                        <GitHub className='text-6xl hover:text-gray-700 transition-all' />
                    </div>


                    <Button className='bg-[#000000]  text-2xl normal-case w-[30rem] py-3 mt-4' variant='contained'>Login</Button>


                    {/* Options */}

                    <p className='text-sm mt-2'>Don't have an account <span className='font-semibold underline'>Register here</span></p>


                </div>

            </div>
        </>
    )
}

export default login
