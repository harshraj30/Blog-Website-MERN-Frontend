import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout';
import SigninCreatePage from './pages/SigninCreatePage';
import UserPage from './pages/UserPage';
import AddBlog from './pages/AddBlog';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const url = "//localhost:4000"

  const [sessionUser , setSessionUser] = useState({username:""})

  useEffect(() => {
    axios.get(url + '/api/auth/user/'+localStorage.getItem('user')).then((res)=>{
      setSessionUser(res.data)
    })
  }, [])
    return (
    <Routes>
      <Route path='/' element={<Layout url={url} sessionUser={sessionUser} setSessionUser={setSessionUser}/>} />
      <Route path='/SigninCreatePage' element={<SigninCreatePage  url={url}/>} />
      <Route path='/UserPage' element={<UserPage url={url} sessionUser={sessionUser} setSessionUser={setSessionUser}/>}/>
      <Route path='/add-blogs' element={<AddBlog url={url} sessionUser={sessionUser} setSessionUser={setSessionUser}/>}/>

    </Routes>
  );
}

export default App;
