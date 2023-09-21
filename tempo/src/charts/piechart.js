import React from 'react';
import { Pie , Radar} from 'react-chartjs-2';
const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [30, 20, 50], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,  
  };

  return (
    <div style={{height:"200px"}}>
      <h2>Sample Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
