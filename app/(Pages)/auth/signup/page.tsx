import { Google, Facebook, Login, Visibility, GitHub} from '@mui/icons-material'
import { TextField, InputAdornment, InputLabel, Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

const Register = () => {
    return (
        <>

            <div className='w-[100vw] py-[5rem] flex flex-col justify-center items-center gap-y-4'>

                {/* intro */}
                {/* <img className='w-14 object-cover' src="/bazzar_logo.png" alt="" /> */}
                <h2 className='text-3xl font-medium'>Welcome to Bazzar</h2>



                {/*name  */}

                <div className="name">
                    <InputLabel className='my-3' htmlFor="name">Name </InputLabel>
                    <TextField className='w-[30rem] min-[550px]:w-[25rem]' id='name' placeholder="Alan Wake" variant="outlined"

                    />
                </div>


                {/*email  */}

                <div className="email">
                    <InputLabel className='my-3' htmlFor="email">Email </InputLabel>
                    <TextField className='w-[30rem] min-[550px]:w-[25rem]' id='email' placeholder="example@gmail.com" variant="outlined"
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
                    <TextField className='w-[30rem] min-[550px]:w-[25rem]' id='password' placeholder='*********' variant="outlined"
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

                <div className="check Password">

                    <InputLabel className='my-3' htmlFor='cpassword'>Check Password</InputLabel>
                    <TextField className='w-[30rem] min-[550px]:w-[25rem]' id='cpassword' placeholder='*********' variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Visibility />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>


                {/* check box */}

                        <div className="checkbox w-[30rem] min-[550px]:w-[25rem] flex flex-row items-center">
                       <Checkbox defaultChecked /> 
                       <p className='text-sm '>By sigining up you agree to <span className='font-semibold underline'>Terms and Condtions</span></p>

                        </div>

                        {/* OAuth 2.0 */}
                    <div className='b-g-[#000000] text-2xl normal-case w-[30rem] min-[550px]:w-[25rem] py-3 mt-4 flex justify-evenly'>
                        <Google className='text-6xl hover:text-blue-500 transition-all' />
                        <Facebook className='text-6xl hover:text-blue-800 transition-all' />
                        <GitHub className='text-6xl hover:text-gray-700 transition-all' />
                    </div>        

                {/* buttons */}

                <div className="buttons flex flex-col items-center gap-y-4">
                    <Button className='bg-[#000000] w-[30rem] min-[550px]:w-[25rem] normal-case text-2xl py-3 mt-2' variant='contained'>Create Account</Button>
                    <div className='bg-[#000000] w-[30rem] min-[550px]:w-[25rem] normal-case text-2xl py-3 mt-2'>Create Account</div>
                  
                    {/* Options */}

                    <p className='text-sm mt-2'>Already have an account <span className='font-semibold border-black border-b-[2px]'>Login</span></p>
                    

                </div>

            </div>
        </>
    )
}

export default Register