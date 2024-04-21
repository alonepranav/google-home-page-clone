import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Signin() {
    return (
        <div className='bg-slate-100 min-h-screen flex justify-center items-center px-52'>
            <div className="w-full">

                <div className="bg-white p-8 flex gap-6 w-full h-96 rounded-[30px]">

                    <div className="w-1/2">
                        <Image src={"/google.png"} alt='Googl Logo' className='h-12 w-12' height={100} width={100} />
                        <h1 className='text-4xl my-4'>Sign in</h1>
                        <p>Use your Google Account</p>
                    </div>

                    <div className="w-1/2">
                        <br />
                        <br />
                        <br />
                        <div className="relative">
                            <input autoFocus className='animate-input border border-slate-500 rounded py-3.5 px-3 w-full outline-blue-600' type="email" />
                            <span className='animate-span'>Email or phone</span>
                        </div>
                        <Link href='/signin/forgot-password' className='text-blue-600 hover:bg-sky-100 rounded-full px-1 font-medium mt-2 block w-fit text-sm'>Forgot email?</Link>

                        <br />
                        <br />
                        <p className='text-sm text-stone-600'>
                            Not your computer? Use a Private Window to sign in.
                            <br />
                            <a href="#" className='text-blue-600 font-medium'>
                                Learn more about using Guest mode
                            </a>
                        </p>

                        <div className="flex gap-3 items-center mt-10 justify-end">
                            <button className='px-5 py-2 rounded-full font-semibold text-sm hover:bg-sky-100 text-blue-600'>Create account</button>
                            <button className='px-7 py-2.5 rounded-full font-semibold text-sm hover:shadow-sm hover:shadow-blue-800 bg-blue-700 text-white'>Next</button>
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
