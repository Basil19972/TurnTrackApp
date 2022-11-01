import { Container } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Bg from "../components/Bg";
import BgUnterseite from "../components/BgUnterseite";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import Userinfos from "../components/Userinfos";
import Userstats from "../components/Userstats";

  function Account() {

    const [user, setuser] = useState({id:'',firstName:'',lastName:'',email:''})

    async function getUser(){
        return await axios.get('https://turn-track-production.herokuapp.com/users/current',{headers:{Authorization:`Bearer ${localStorage.getItem("AccessToken")}`}})
      }



    useEffect(()=>{
        getUser().then(res => {      
          setuser(res.data)
          console.log(user.firstName)
    
        })},[])

        
    return (
        <><NavBar links={[
          {
            "link": "/",
            "label": "Homepage"
        },
          {
            "link": "/userStatPage",
            "label": "Training Progess"
        },
        {
            "link": "/account",
            "label": "Account"
        },
        {
            "link": "/contact",
            "label": "Contact"
        },
        {
            "link": "/exercises",
            "label": "Exercises"
        }
        ]} />

        <BgUnterseite mess="Account" />



        <Userinfos avatar={"https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/000000/external-user-user-tanah-basah-glyph-tanah-basah-4.png"} 
        firstname={user.firstName} 
        lastname={user.lastName} 
        weight={97} 
        height={1.87} 
        email={user.email} 
        age={25}/>


        <Container mt={100}>
        <Userstats/>
        </Container>

        
        
        
        <></><Footer links={[
        {
          "link": "#",
          "label": "Contact"
        },
        {
          "link": "#",
          "label": "Privacy"
        },
        {
          "link": "#",
          "label": "Blog"
        },
        {
          "link": "#",
          "label": "Careers"
        }
      ]} /></>





    );
  }
  
  export default Account
  
  
  