"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { TiThSmall } from 'react-icons/ti'


const apps: {
    image: string,
    title: string
}[] = [
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
        { image: "", title: "Account" },
    ]

function AppsList() {
    return (
        <div className='overflow-hidden bg-stone-50 absolute border border-slate-300 shadow-lg shadow-slate-200 top-12 -left-44 rounded-3xl py-2 pl-2 pr-1.5 w-[20.7rem] h-[28rem]'>
            <div className="overflow-y-scroll h-full w-full rounded-2xl">
                <div className="bg-slate-100 p-3 w-full h-fit rounded-2xl flex justify-center items-center gap-3 flex-wrap">
                    {
                        apps.map((a, i) => {
                            return <div key={i} className='my-3 flex gap-2 justify-center items-center flex-col mx-3'>
                                <Image className='h-10 w-10' src={"/google.png"} alt='adasdasd' height={100} width={100} />
                                <p className='font-normal text-sm'>{a.title}</p>
                            </div>
                        })
                    }
                </div>
                <div className="flex justify-center my-7">
                    <button className='px-5 py-2 rounded-full text-blue-600 bg-transparent border-black border'>More from Google</button>
                </div>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [applistShow, setApplistShow] = useState<boolean>(false)

    return (
        <div className='flex justify-end items-center gap-7 p-3'>
            <div className="flex gap-3 items-center text-xs">
                <p className="">Gmail</p>
                <p className="">Images</p>
            </div>
            <div className="relative">
                {
                    applistShow &&
                    <AppsList />
                }
                <div className={` ${applistShow && "bg-stone-300"} hover:bg-stone-200 p-2 rounded-full`} onClick={() => setApplistShow(!applistShow)}>
                    <TiThSmall className={`text-xl text-slate-500`} />
                </div>
            </div>
            <Link href={"/signin"} className='px-7 py-2 bg-blue-600 text-white text-sm rounded-[4px]'>Sign in</Link>
        </div>
    )
}
