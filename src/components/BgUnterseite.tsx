import { BackgroundImage, Center, Text, Box, Button } from '@mantine/core';

function BG({mess}:{mess:string}) {
  return (
    <Box >

      <BackgroundImage sx={{ 
        maxWidth: '100%',
      height: 400}}
        src="/pics/sushil-ghimire-5UbIqV58CW8-unsplash.jpg"
        radius="xs">

        <Center pt={150}>
          <Text size={50} color="#fff" >
            {mess}
          </Text>
        </Center> 

      </BackgroundImage>
    </Box>
  );
}

export default BG;