import { Box, Button, Container, Group, Input, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import BgUnterseite from "../components/BgUnterseite";
import CreateExercise from "../components/CreateExercise";
import ExerciseTable from "../components/ExerciseTable";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import PlusminusButton from "../components/plusminusButton";
import TrainingdayTable from "../components/TrainingdayTable";



 


  function Account() {

        
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

<BgUnterseite mess="Exercises" />

        <Container size="sm" pt={100}>
        <h1>All Exercises</h1>

        <Container pt={50} >
        <CreateExercise/>
        </Container>

        <Container mt={50}>
        <ExerciseTable />
        </Container>
    
        </Container>
        <Container mt={50}>
          <TrainingdayTable/>
        </Container>





    
        
        <></><Footer links={[
        {
          "link": "#",
          "label": "Privacy Policy"
        },
        {
          "link": "/imprint",
          "label": "Imprint"
        }
      ]} /></>





    );
  }
  
  export default Account
  
  
  