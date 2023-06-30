import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
//   BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { revenuePerDay, selectUserFreq } from '../redux/stats/statsSlice';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );


const TotalRevenue = () => {

  const UserFreq = useSelector(revenuePerDay);

  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const dateValues = [];
    const dateData = [];
    // Get the minimum and maximum dates from UserFreq
    const dates = [...UserFreq.keys()]; // Convert map keys to an array

    // Convert date strings to Date objects
    const dateObjects = dates.map(dateString => new Date(dateString));

    // Get the minimum and maximum dates
//     let today = new Date();
// let indianTime = today.toLocaleString("en-US", "Asia/Delhi");
// console.log(indiamTim)
    const minDate = new Date(Math.min(...dateObjects));
    const maxDate = new Date(Math.max(...dateObjects));

    const dateRange = [];
    let currentDate = new Date(minDate);
    while (currentDate <= maxDate) {
      dateRange.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dateRange.forEach(date => {
      dateValues.push(UserFreq.get(date) || 0);
      dateData.push(date);
    });
    setLabels(dateData);
    setValues(dateValues);
  }, [UserFreq])


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue per day',
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
        fill:true,
        label: 'Registered User',
        data: values,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',

      }
    ],
  };

  return (
    <div className='pt-3'>
      <Line options={options} data={data} height={500} />
    </div>
  );
}

export default TotalRevenue;
