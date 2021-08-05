import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import classes from './PieChart.module.css';

const PieChart = ({ correct, total }) => {
  const data = {
    labels: ['Total questions', 'Correct questions'],
    datasets: [
      {
        label: 'Quiz score',
        data: [total, correct],
        backgroundColor: ['rgb(0, 240, 0, 0.5)', 'green'],
      },
    ],
    borderWidth: 1,
  };
  return (
    <div className={classes.pieChart}>
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
