// import React from 'react'
// import Navbar from './Navbar'

// const Layout = ({sessionUser ,setSessionUser}) => {
//     return (
//         <div className="w-screen">

//             <Navbar sessionUser={sessionUser} setSessionUser={setSessionUser}>
//                 <div className="flex justify-center">
//                     <div className="w-[90%] mt-28">
//                         <h1 className='text-xl mb-5 font-semibold'>People & Society</h1>
//                         <div className="grid gap-5 grid-cols-4">
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
//                             <div className="flex hover:shadow-xl  hover:shadow-gray-400 duration-300 p-3 cursor-pointer py-5 flex-col gap-2">
//                                 <img className='' src="https://cdn.wrytin.com/images/thumbnail/r/400/22-23-32-th-jtbrep8c.jpeg" alt="" />
//                                 <h1 className='text-lg font-semibold'>Grandparents, Like Heroes, Are As Necessary ...</h1>
//                                 <h2 className='text-gray-500' >Grandparents are a delightful blend of laughter, caring deeds, wonderful stories and Love..</h2>
//                                 <p className='text-gray-500'>494 view</p>
//                             </div>
                            
//                         </div>
//                         <div className="flex py-2 justify-end">

//                             <button className='border border-orange-500 rounded-full px-5 text-orange-500 hover:bg-orange-500 hover:text-white mt-5 py-2'>Read More</button>
//                         </div>

//                     </div>
//                 </div>
//             </Navbar>
//         </div>
//     )
// }

// export default Layout