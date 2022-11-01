import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { Stats } from 'fs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



async function getStat1(){

 return await axios.get('http://localhost:8080/trainingset/stat1',{headers:{Authorization:`Bearer ${localStorage.getItem("AccessToken")}`}})
                 
}



 function App() {

  const [stats, setstats] = useState([{date:'',exercisename:'',repetitions:0,weight:0}])

  stats.forEach(element => console.log(element.date,element.exercisename,element.weight,element.repetitions));

  stats.forEach(element => console.log(element.exercisename));

 const labels:any = [];
 stats.forEach(element => labels.push(element.exercisename));
 


  const data = {
   labels,
   datasets: [
     {
       label: 'Repetitions',
       data: stats.map(element => element.repetitions),
       
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
     },
     {
       label: 'Weight',
       data: stats.map(element => element.weight),
       backgroundColor: 'rgba(53, 162, 235, 0.5)',
     },
   ],
 };

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


  useEffect(()=>{
    getStat1().then(res => {      
      setstats(res.data)

    })},[])




  return <Bar options={options} data={data} />;
}

export default App;
