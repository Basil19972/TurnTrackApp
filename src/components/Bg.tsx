import { BackgroundImage, Center, Text, Box, Button } from '@mantine/core';
import axios from 'axios';

const getQuoteFromAPI = () =>{

  axios.get('https://zenquotes.io/api/quotes/Success',{headers: {'Access-Control-Allow-Origin': '*'}})
  .then(response => {
    console.log(response.data)
    console.log(response.status)})};

function BG() {
  return (
    <Box >

      <BackgroundImage sx={{ 
        maxWidth: '100%',
      height: 600}}
        src="/pics/anastase-maragos-9dzWZQWZMdE-unsplash.jpg"
        radius="xs">

        <Center pt={250}>
          <Text size={50} color="#fff" >
            Turn Track
          </Text>
        </Center>

        <Center>
        <Button 
        size="sm" onClick={getQuoteFromAPI} 
        variant="gradient"
        gradient={{ deg: 133, from: 'red', to: 'cyan' }}
        >Get App</Button>
        </Center>

      </BackgroundImage>
    </Box>
  );
}

export default BG;