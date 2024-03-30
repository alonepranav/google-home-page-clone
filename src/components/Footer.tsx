import React from 'react'

export default function Footer() {
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
                <div className="flex gap-7 items-center">
                    <a href="#" className='hover:underline'>Privacy</a>
                    <a href="#" className='hover:underline'>Terms</a>
                    <a href="#" className='hover:underline'>Settings</a>
                </div>
            </div>
        </div>
    )
}
