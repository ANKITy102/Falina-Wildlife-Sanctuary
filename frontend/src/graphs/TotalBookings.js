import React, { useEffect, useRef, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBookings, selectUserFreq } from '../redux/stats/statsSlice';


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
  PointElement,
  Title,
  Tooltip,
  Legend
);


const TotalBookings = () => {

  const totalBookings = useSelector(selectBookings);

  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const dateValues = [];
    const dateData = [];
    console.log(totalBookings)
    // Get the minimum and maximum dates from UserFreq
    const dates = [...totalBookings.keys()]; // Convert map keys to an array

    // Convert date strings to Date objects
    const dateObjects = dates.map(dateString => new Date(dateString));

    // Get the minimum and maximum dates
    const minDate = new Date(Math.min(...dateObjects));
    const maxDate = new Date(Math.max(...dateObjects));

    const dateRange = [];
    let currentDate = new Date(minDate);
    while (currentDate <= maxDate) {
      dateRange.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dateRange.forEach(date => {
      dateValues.push(totalBookings.get(date) || 0);
      dateData.push(date);
    });
    setLabels(dateData);
    setValues(dateValues);
  }, [totalBookings])


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of User registering per day',
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Ensure y-axis starts at zero
      },
    },

  };


  const data = {
    labels,
    datasets: [
      {
        label: 'Registered User',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        barThickness: 40,
      }
    ],
  };

  return (
    <div className='pt-3'>
      <Bar options={options} data={data} height={500} />
    </div>
  );
}

export default TotalBookings
