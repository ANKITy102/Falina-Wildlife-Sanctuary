import React, { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // LineElement,
  // PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((elem, ind) => {
        console.log(ind)
        return (100*ind*ind)}),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'blue',
        'red',
        'black',
        'brown',
        'green',
        'orange',
        'gray'
    ],
      
    }
  ],
};
const TotalBookings = () => {
  

  return (
    <div >
      <Bar options={options} data={data} height={500}/>
    </div>
  );
}

export default TotalBookings
