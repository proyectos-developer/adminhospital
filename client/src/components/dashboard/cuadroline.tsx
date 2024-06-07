import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { options_line } from '../../uri/chart-constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January 2024', 'February 2024', 'March 2024', 'April 2024', 'May 2024'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Ingresos',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(130, 180, 64)',
      backgroundColor: 'rgba(130, 180, 64, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Gastos',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export default function CuadroLine() {

    return (
        <Line options={options_line} data={data} style={{width: '100%', height: '100%'}}/>)
    
}
