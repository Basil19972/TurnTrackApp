import { Container } from "@mantine/core";
import Bg from "../components/Bg";
import CallToAction from "../components/CallToAction";
import CarousellMantine from "../components/CarousellMantine";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
      <>
        <NavBar
          links={[
            {
              link: "/",
              label: "Homepage",
            },
            {
              link: "/userStatPage",
              label: "Training Progess",
            },

            {
              link: "/account",
              label: "Account",
            },
            {
              link: "/contact",
              label: "Contact",
            },
            {
              link: "/exercises",
              label: "Exercises",
            },
          ]}
        />

        <Bg />

        <Container size={"xl"} pt={50}>
          <CallToAction />
        </Container>

        <Container size={"xl"} pt={50}>
          <CarousellMantine />
        </Container>
      </>
      <Footer
        links={[
          {
            link: "/privacypolicy",
            label: "Privacy Policy",
          },
          {
            link: "/imprint",
            label: "Imprint",
          },
        ]}
      />
    </>
  );
}

export default LandingPage;
