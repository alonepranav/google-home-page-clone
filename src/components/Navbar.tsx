import Link from 'next/link'
import React from 'react'
import { TiThSmall } from 'react-icons/ti'

export default function Navbar() {
    return (
        <div className='flex justify-end items-center gap-7 p-3'>
            <div className="flex gap-3 items-center text-xs">
                <p className="">Gmail</p>
                <p className="">Images</p>
            </div>
            <p className="">
                <TiThSmall className='text-xl text-slate-500' />
            </p>
            <Link href={"/signin"} className='px-7 py-2 bg-blue-600 text-white text-sm rounded-[4px]'>Sign in</Link>
        </div>
    )
}
