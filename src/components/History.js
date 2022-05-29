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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const History = ({ history, currentPair }) => {
  const options = {
    responsive: true,
  };
  const data = {
    labels: history.map(({ time_close }) => time_close.slice(0, 10)),
    datasets: [
      {
        label: currentPair,
        data: history.map(({ rate_close }) => rate_close),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <section className='border rounded p-3'>
      <h2>History data</h2>
      <Line options={options} data={data} />
    </section>
  );
};
