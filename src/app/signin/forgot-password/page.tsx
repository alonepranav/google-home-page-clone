import Image from 'next/image'
import React from 'react'

export default function Signin() {
    return (
        <div className='bg-slate-100 min-h-screen flex justify-center items-center px-52'>
            <div className="w-full">

                <div className="bg-white p-8 flex gap-6 w-full h-96 rounded-[30px]">

                    <div className="w-1/2 flex gap-2 flex-col">
                        <Image src={"/google.png"} alt='Googl Logo' className='h-12 w-12' height={100} width={100} />
                        <h1 className='text-4xl my-4 text-stone-900'>Find your email</h1>
                        <p>Enter your phone number or recovery email</p>
                    </div>

                    <div className="w-1/2">
                        <div className="relative mt-[5rem]">
                            <input autoFocus className='focus:outline-blue-600 border animate-input border-slate-500 rounded py-3.5 px-3 w-full' type="email" />
                            <span className='animate-span'>Phone number or email</span>
                        </div>
                       
                        <div className="flex gap-3 items-center mt-36 justify-end">
                            <button className='px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-sm hover:shadow-blue-800 bg-blue-700 text-white'>Next</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-xs">
                    <p className='hover:bg-[rgba(0,0,0,0.1)] px-3 rounded-md py-1.5 cursor-pointer'> English (United States)</p>
                    <div className="flex justify-between items-center">
                        <div className="hover:bg-[rgba(0,0,0,0.1)] px-3 rounded-md py-1.5 cursor-pointer">Help</div>
                        <div className="hover:bg-[rgba(0,0,0,0.1)] px-3 rounded-md py-1.5 cursor-pointer">Privacy</div>
                        <div className="hover:bg-[rgba(0,0,0,0.1)] px-3 rounded-md py-1.5 cursor-pointer">Terms</div>
                    </div>


                </div>
            </div>
        </div>
    )
}
