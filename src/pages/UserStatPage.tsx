

import { Container } from '@mantine/core';
import BgUnterseite from '../components/BgUnterseite';
import CartStat from '../components/CartStat';
import Footer from '../components/footer';
import NavBar from '../components/NavBar';
import Userstats from '../components/Userstats';



  function LandingPage() {
  return (
    <><>
              <NavBar links={[
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

<BgUnterseite mess="Training Progres" />


    <Container size={"xl"} pt={100}>
      <CartStat/>
      </Container>

   







    </>
      <Footer links={[
        {
          "link": "/privacypolicy",
          "label": "Privacy Policy"
        },
        {
          "link": "/imprint",
          "label": "Imprint"
        }
      ]} />
    </>
  );
}

export default LandingPage



