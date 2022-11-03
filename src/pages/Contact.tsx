import { Container } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import BgUnterseite from "../components/BgUnterseite";
import Footer from "../components/footer";
import GetInTouch from "../components/GetInTouchForm";
import NavBar from "../components/NavBar";
import Userinfos from "../components/Userinfos";

function Contact() {
  return (
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

      <BgUnterseite mess="Contact" />

      <Container mt={200}>
        <GetInTouch />
      </Container>

      <></>
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

export default Contact;
