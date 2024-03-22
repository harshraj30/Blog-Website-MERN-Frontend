import React from 'react'

const Components = () => {
    return (
        <div className="w-[25%] h-[60vh] py-5 flex items-center justify-center">
            <div className="flex border p-10 rounded-xl shadow-lg shadow-black flex-col gap-8">
                <span className="w-full flex justify-center">
                    <p className=' rounded-full w-36 h-36 font-bold flex items-center justify-center text-7xl bg-gray-800 text-slate-200'>H</p>
                </span>
                <div className=" flex flex-col gap-4">
                    <h1 className='capitalize text-3xl text-slate-600 text-center font-semibold tracking-wider'>harsh raj</h1>
                    <h2 className='text-lg'>harsh30032003@gmail.com</h2>
                    <div className="w-full flex justify-end">
                        <h2 className='border border-slate-500 px-4 py-1 w-fit rounded-lg cursor-pointer'>23 Blogs</h2>
                    </div>
                    <p className='capitalize'>more about my channel <span className='text-white font-bold'>...more</span></p>
                    <button className='border py-1 bg-rose-400 font-semibold hover:bg-rose-500 hover:text-white duration-300'>LogOut</button>
                </div>
            </div>
        </div>)
}

export default Components   