import React from 'react';
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
import faker from 'faker';
import { options_bar_horizontal } from '../../uri/chart-constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January 2024', 'February 2024', 'March 2024', 'April 2024', 'May 2024'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pacientes nuevos',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(130, 180, 64)',
      backgroundColor: 'rgba(130, 180, 64, 0.5)',
    },
    {
      label: 'Pacientes antiguos',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function CuadroBarHorizontal () {

    return (
        <Bar options={options_bar_horizontal} data={data} style={{width: '100%', height: '100%'}}/>
    )
}
