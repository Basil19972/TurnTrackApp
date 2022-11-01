import { Button, NumberInput, TextInput } from '@mantine/core';
import axios from 'axios';
import {useState} from 'react';





function App(){
  const [name, setname] = useState('');
  const [amountOfSets, setamountofsets] = useState(0);

  const exercise = {name:name, amountOfSets:amountOfSets }


  const sendCreatedExercise = () =>{

          axios.post('https://turn-track-production.herokuapp.com/exercise', exercise, {headers:{Authorization:`Bearer ${localStorage.getItem("AccessToken")}`}} )
          .then(response => {
            window.location.reload()})
        
        };
  



  const handleChange = (event: any) => {
    setname(event.target.value);
  };

  const handleChange1 = (event: number) => {
    setamountofsets(event);
  };

  return (
    <div>
      <TextInput
       label="Exercise Name"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={name}
      />

      <NumberInput
      label="Amout of Sets"
      type="number"
      onChange={handleChange1}
      />





      <Button onClick={sendCreatedExercise} mt={10}>Create Exercise</Button>

      
    </div>
  );
};

export default App;
