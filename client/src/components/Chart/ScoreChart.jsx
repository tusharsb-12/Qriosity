import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import classes from './ScoreChart.module.css';

const ScoreChart = ({ scores }) => {
  const data = {
    labels: scores.map(({ title }) => title),
    datasets: [
      {
        label: 'Score /Total marks',
        data: scores.map(({ score, totalMarks }) => score / totalMarks),
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h1 className={classes.title}>Score Analysis</h1>
      <Line className={classes.chart} data={data} />
    </div>
  );
};

export default ScoreChart;
