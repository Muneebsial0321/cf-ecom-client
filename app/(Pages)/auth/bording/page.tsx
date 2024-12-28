'use client'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const Bording = () => {

    const query = useSearchParams()
    const token = query.get("authtoken")


    if (token) {
        localStorage.setItem("bazzar_token", token)
        redirect('/home')
    }


    return (
        <div></div>
    )
}

export default Bording