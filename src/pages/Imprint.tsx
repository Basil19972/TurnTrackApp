import { Container, Text } from "@mantine/core";
import BgUnterseite from "../components/BgUnterseite";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

  function Contact() {

 

        
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

<BgUnterseite mess="Impressum" />

    <Container>

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
  
  export default Contact
  
  
  