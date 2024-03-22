import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddBlog = ({url ,sessionUser ,setSessionUser}) => {
    const navigate = useNavigate()

    const [blogData , setBlogData ] = useState({
        title:"",
        summary:"",
        content:"",
        file:"",
    })

    const handleSubmit = () => {
        axios.postForm(url +'/api/createblog' , blogData).then((res)=>{
            navigate('/UserPage')
        })
    }

    return (
        <div className="min-h-screen">
            {localStorage.getItem('user') ?
            <Navbar sessionUser={sessionUser} setSessionUser={setSessionUser} url={url}>
                <div className="w-screen mt-[75px] flex justify-center">
                    <div className="w-[15%] pl-10 h-[60vh] py-5 flex flex-col">
                        <Link to={'/UserPage'}><p className='text-xl font-semibold pb-2'>Blogs</p></Link>
                        {localStorage.getItem('user') ?  <Link to={'/add-blogs'}><p className='text-xl font-semibold pb-2'>Add Blogs</p></Link> : "" }
                        {/* <Link to={'/profile'}><p className='text-xl font-semibold pb-2'>Profile</p></Link> */}

                    </div>
                    <div className="w-[80%] flex justify-center">
                        <div className="border-2 border-zinc-400 rounded-xl w-full m-4">
                            <p className='text-4xl font-semibold tracking-wider py-2 text-center pb-10'>Add Blogs</p>
                            <div className="flex flex-col gap-3">
                                <div className="px-5">
                                    <p className='text-lg'>Title <span className='text-orange-500'>*</span></p>
                                    <input value={blogData.title} onChange={(e)=>{setBlogData({...blogData , title:e.target.value})}} type="text" className='outline-none px-2 duration-300 py-1 rounded border-2 focus:border-orange-600 w-full' />
                                </div>
                                <div className="px-5">
                                    <p className='text-lg'>Summary <span className='text-orange-500'>*</span></p>
                                    <input value={blogData.summary} onChange={(e)=>{setBlogData({...blogData , summary:e.target.value})}} type="text" className='outline-none px-2 duration-300 py-1 rounded border-2 focus:border-orange-600 w-full' />
                                </div>
                                <div className="px-5">
                                    <p className='text-lg'>Thumbnail <span className='text-orange-500'>*</span></p>
                                    <input type="file" onChange={(e)=> { setBlogData({...blogData , file:e.target.files[0]})}} className='outline-none px-2 duration-300 py-1 rounded border-2 focus:border-orange-600 w-full' />
                                </div>
                                <div className="px-5">
                                    <p className='text-lg'>Content <span className='text-orange-500'>*</span></p>
                                    <textarea value={blogData.content} onChange={(e)=>{setBlogData({...blogData , content:e.target.value})}} rows={10} className='outline-none px-2 duration-300 py-1 rounded border-2 focus:border-orange-600 w-full' ></textarea>
                                </div>
                                <div className="px-5 flex justify-end pb-5">
                                    <button onClick={handleSubmit} className='bg-orange-500 text-white px-10 py-2 rounded hover:bg-orange-600 duration-500'>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar> : navigate('/SigninCreatePage') }
        </div>

    )
}

export default AddBlog