import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserPage = ({ url, sessionUser, setSessionUser }) => {

    const [blogData, setBlogData] = useState()

    useEffect(() => {
        axios.get(url + '/api/blogs').then((res) => {
            setBlogData(res.data)
        })
    }, [])

    // window.open('/UserPage' , "_self")

    return (
        <div className="min-h-screen">
            <Navbar sessionUser={sessionUser} setSessionUser={setSessionUser} url={url}>
                <div className="w-screen mt-[75px] flex justify-center">
                    <div className="w-[15%] pl-10 h-[60vh] py-5 flex flex-col">
                        <Link to={'/UserPage'}><p className='text-xl font-semibold pb-2'>Blogs</p></Link>
                        {localStorage.getItem('user') ? <Link to={'/add-blogs'}><p className='text-xl font-semibold pb-2'>Add Blogs</p></Link> : ""}
                        {/* <Link to={'/profile'}><p className='text-xl font-semibold pb-2'>Profile</p></Link> */}

                    </div>
                    <div className="w-[80%] flex justify-center">
                        <div className="w-[95%]">
                            <div className="">
                                <h1 className='text-3xl font-semibold pt-4 pl-2'>My Blogs</h1>
                                <div className="grid grid-cols-3 gap-5 ">
                                    {blogData ? blogData.map((element, index) => (
                                        <div key={index} className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
                                            <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
                                            <h1 className='text-lg font-semibold'>{element.title}</h1>
                                            <h2 className='text-gray-500' >{element.summary}</h2>
                                            <p className='text-gray-500'>494 view</p>
                                        </div>
                                    )) : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default UserPage