import { Group, Image } from "@mantine/core";
import Authentication from "../components/Authentication";

  function LoginPage() {
    return (
      <><Group>
        <Image
          height={80}
          width={80}
          src={'/pics/hantel-removebg-preview.png'} />
        <h2>Turn Track</h2>

      </Group>
      <Authentication /></>

    );
  }
  
  export default LoginPage
  
  
  