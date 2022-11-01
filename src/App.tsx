
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import UserStatPage from './pages/UserStatPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Exercises from './pages/Exercises';
import Impresum from './pages/Imprint';
import Imprint from './pages/Imprint';

async function login(){
  await axios.get('https://turn-track-production.herokuapp.com/current',{headers:{Authorization:`Bearer ${localStorage.getItem("AccessToken")}`}})
}



export default function App() {

  const [loading, setIsloading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(()=>{

    login().then(()=> {
    setIsLoggedIn(true)
    setIsloading(false)
    }).catch(()=>{
      setIsLoggedIn(false)
      setIsloading(false)
    })


  },[])

  if(loading) return <p>Loading...</p>

  if(!isLoggedIn) return <LoginPage/>

  return (



<BrowserRouter>
<Routes>
<Route index element={<LandingPage />} />
<Route path="login" element={<LoginPage />} />
<Route path="userStatPage" element={<UserStatPage />} />
<Route path="account" element={<Account />} />
<Route path="contact" element={<Contact />} />
<Route path="exercises" element={<Exercises />} />
<Route path="imprint" element={<Imprint />} />




<Route path="*" element={<NoPage />} />
</Routes>
</BrowserRouter>
  );
}





<>
<LandingPage />
<LoginPage />
</>