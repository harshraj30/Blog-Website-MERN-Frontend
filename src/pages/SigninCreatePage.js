import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SigninCreatePage = ({ url, sessionUser, setSessionUser }) => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        password: "",
    })

    const handleLogin = () => {

        axios.post(url + '/api/auth/login', userData).then((res) => {
            if (res.data.status == "fail") {
                alert(res.data.msg)
            }
            else {
                if (res.data.status == "success") {
                    localStorage.setItem('user', res.data.userDoc.username)

                    navigate("/UserPage")
                }
            }
        })
    }
    const handleRegister = () => {
        axios.post(url + '/api/auth/register', userData).then((res) => {
            if (res.data.status == "fail") {
                alert(res.data.msg)
            }
            else {
                console.log(res.data);
                if (res.data.status == "success") {
                    handleClick()
                    userData.name = ""
                    userData.password = ""
                }
            }
        })

    }

    const [signin, setSignin] = useState(false)
    const [swit, setSwit] = useState('')
    const [roundedDiv, setRoundedDiv] = useState('rounded-l-full')
    const handleClick = () => {
        if (swit == 'flex-row-reverse') {
            setSwit('')
            setRoundedDiv('rounded-l-full')
            setSignin(false)
        }
        else {
            setSwit('flex-row-reverse')
            setRoundedDiv('rounded-r-full')
            setSignin(true)
        }
    }

    return (
        <div className="w-screen bg-gray-500 flex justify-center items-center h-screen">
            <div className={`w-[50%] border h-fit flex ${swit} border-white`}>
                <div className="w-[50%] flex justify-center py-10 px-5">
                    {signin ? <div className="w-[85%]">
                        <span> <h1 className='text-3xl font-semibold cursor-default text-center'>Create Account</h1> </span>
                        <div className="flex flex-col gap-5 pt-5">
                            <div className="flex justify-center gap-10">
                                <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>
                                </div>
                                <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                                <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </div>
                                <Link to="https://github.com/harshraj30">
                                    <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500  hover:text-white cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <h1 className='text-center cursor-default text-gray-400'>or you use email or registration</h1>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <div className="w-[86%] py-3 gap-4 flex flex-col">
                                <input value={userData.name} onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} className=' bg-gray-100 border-none rounded-lg outline-none px-2 py-1' size={36} type="text" placeholder='Enter Your Username : ' name="" id="" />
                                <input value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} className=' bg-gray-100 border-none rounded-lg outline-none px-2 py-1' size={36} type="Password" placeholder='Enter Your Password : ' name="" id="" />
                                <div className="flex justify-center">
                                    <button onClick={handleRegister} className='capitalize px-7 rounded-lg text-white font-semibold  cursor-pointer hover:bg-orange-600 py-1 bg-orange-500  w-fit '>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="w-[85%]">
                            <span> <h1 className='text-3xl cursor-default font-semibold text-center'>Sign in</h1> </span>
                            <div className="flex flex-col gap-5 pt-5">
                                <div className="flex justify-center gap-10">
                                    <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                        </svg>
                                    </div>
                                    <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                    </div>
                                    <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    </div>
                                    <Link to={"https://github.com/harshraj30"}>
                                        <div className=" border  border-gray-50 rounded-lg p-3 text-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" bg-transparent h-5 bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <h1 className='text-center cursor-default text-gray-400'>or you use email and password</h1>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[86%] py-3 gap-4 flex flex-col">
                                    <input value={userData.name} onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} className=' bg-gray-100 border-none rounded-lg outline-none px-2 py-1' size={36} type="text" placeholder='Enter Your Username : ' name="" id="" />
                                    <input value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} className=' bg-gray-100 border-none rounded-lg outline-none px-2 py-1' size={36} type="Password" placeholder='Enter Your Password : ' name="" id="" />
                                    <div className="flex justify-center">
                                        {/* <Link to="/MasterStudentPage"> */}
                                        <button onClick={handleLogin} className='capitalize px-7 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-600 py-1 bg-orange-500  w-fit '>Login</button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <div className={`w-[50%] ${roundedDiv} bg-yellow-500 flex justify-center items-center`}>
                    {signin ? <div className=" flex flex-col gap-5 px-6">
                        <h1 className='text-center text-3xl font-semibold text-white'>Welcome Back</h1>
                        <p className='text-center text-lg text-white'>Enter Your Personal Details to use all of site features</p>
                        <div className="flex justify-center">
                            <button onClick={handleClick} className='border px-8 py-1.5 rounded-lg text-white'>SIGN IN</button>
                        </div>
                    </div> :
                        <div className=" flex flex-col gap-5 px-6">
                            <h1 className='text-center text-3xl font-semibold text-white'>Start New Journey</h1>
                            <p className='text-center text-lg text-white'>Enter Your Personal Details to use all of site features</p>
                            <div className="flex justify-center">
                                <button onClick={handleClick} className='border px-8 py-1.5 rounded-lg text-white'>REGISTER</button>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default SigninCreatePage