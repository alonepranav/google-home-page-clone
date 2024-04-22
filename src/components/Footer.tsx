"use client"

import React, { useState } from 'react'

export default function Footer() {

    const [box, setBox] = useState<boolean>(false)

    return (
        <div className='bg-[#efefef]'>
            <div className="border border-b-2 border-b-slate-200 p-3 px-8">
                <p>India</p>
            </div>
            <div className="text-sm px-8 flex justify-between items-center py-3.5">
                <div className="flex gap-7 items-center">
                    <a href="#" className='hover:underline'>About</a>
                    <a href="#" className='hover:underline'>Advertising</a>
                    <a href="#" className='hover:underline'>Business</a>
                    <a href="#" className='hover:underline'>How Search Works</a>
                </div>
                <div className="flex gap-7 items-center relative">
                    {
                        box &&
                        <div className="absolute rounded-md -top-[15.5rem] bg-white -right-3 text-sm" style={{
                            boxShadow: "0 2px 10px #d0d0d0"
                        }}>
                            <div className="flex flex-col pt-1 border-b border-b-slate-300 pb-1">
                                {
                                    ["Search Setting", "Advanced Search", "Your data in Search", "Search history", "Search help", "Send feedback"].map((a, i) => {
                                        return <p key={i} className='px-3.5 py-1 hover:bg-stone-200'>{a}</p>
                                    })
                                }
                            </div>
                            <div className="  ">
                                <a href='#' className='block my-1 px-3.5 py-3 hover:bg-stone-200'>Dark Theme : off</a>
                            </div>
                        </div>
                    }
                    <a href="#" className='hover:underline'>Privacy</a>
                    <a href="#" className='hover:underline'>Terms</a>
                    <a href="#" className='hover:underline' onClick={() => setBox(!box)}>Settings</a>
                </div>
            </div>
        </div>
    )
}
