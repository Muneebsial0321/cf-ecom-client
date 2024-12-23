import { Button, FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material'
import React from 'react'


interface PageProps {
    params: Promise<{
      slug: string; 
    }>;
  }
const page = async ({ params}:PageProps) => {
    const pageParams = await params
    const slug = pageParams.slug
    const product = {
        _id: "",

    }
    console.log({slug})

    return (
        <>
            <div className="hidden bg-[blue]"></div>
            <div className="hidden bg-[green]"></div>
            <div className="hidden bg-[purple]"></div>
            <div className="hidden bg-[red]"></div>
            <div className="hidden bg-[yellow]"></div>
            <div className="hidden bg-[silver]"></div>
            <div className="hidden bg-[grey]"></div>

            <div className='w-[100vw] py-[6rem] flex justify-center items-center'>

                {/* img */}

                <div className='flex px-10 bg-inherit flex-col justify-center w-1/2 items-center h-full' id="left img">
                    <img className='w-3/4 object-contain' src="http://localhost:5000/images/img.webp" alt="" />
                </div>



                {/* Description */}
                <div className='flex px-10  flex-col justify-center w-1/2  h-full gap-y-6' id="right">
                    <span className='text-sm text-gray-500'>ID :{product._id}</span>
                    <h3 className='text-4xl font-semibold'>Title</h3>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci quas eos vero id unde delectus odio, pariatur dignissimos esse non aliquam nam porro laudantium, perferendis sit eius? Blanditiis, optio!</p>

                    {/* ratings */}
                    <div className="rating flex flex-row items-center">

                        <p className='text-xl font-semibold'>Rated : </p>&nbsp;<Rating name="read-only" value={4} readOnly /> <p>&nbsp;{` (50)`}</p>
                    </div>


                    {/* Option */}

                    {/* size */}

                    <FormControl
                        className='w-[7rem]'
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'black',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                            },
                            '& label.Mui-focused': {
                                color: 'black',
                            },
                        }}
                    >
                        <InputLabel id="select-label">Size</InputLabel>
                        <Select

                            labelId="select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Size"


                        >
                            <MenuItem

                            ><p className='font-mono'>-Select-</p></MenuItem>
                            <MenuItem value={10}>Small</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </FormControl>

                    {/* control */}

                    <div className="radio flex gap-4 box-border w-[17rem]">

                        {/* testing */}
                        {/* {product.color && product.color.map((e, i) => {
                            return <div key={i}>
                                <input className='hidden' onChange={onChange} type="radio" value={e} name="Radio" id={`r-${i}`} />
                                <Button variant={radio == e ? "outlined" : "text"} className={`${radio == e ? "text-white" : "text-[black]"} border-[black]  ${radio == e ? `bg-[${e}] ` : ""}  font-semibold`}><label htmlFor={`r-${i}`}>{e}</label></Button>
                            </div>
                        }
                        )
                        } */}


                    </div>



                    {/* PRICE */}

                    <p className='text-[black] text-4xl font-bold'>{70}</p>
                    <Button
                        // onClick={() => addproduct({
                        //     ...product
                        // })}
                        className='bg-[black]  w-[10rem] py-3 mt-2' variant='contained'>Add to Cart</Button>

                </div>
            </div>
        </>
    )
}


export default page