/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios.config"


const createProduct =async (payload:any) =>{
    const req = await axios.post('/products',payload)
    console.log({data:req.data})

}

export {createProduct}