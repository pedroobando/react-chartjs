import { defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import revenueData from './data/revenueData.json';
import sourceData from './data/sourceData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

export const App = () => {
  return (
    <div className="h-lvh w-full flex flex-row items-center justify-center content-center gap-2 flex-wrap bg-app-gris-suave">
      <div className="rounded-md shadow-md shadow-gray-500/45 p-2 bg-app-rojiso w-11/12 h-80">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: 'Revenue',
                data: revenueData.map((data) => data.revenue),
                backgroundColor: '#064FF0',
                borderColor: '#064FF0',
              },
              {
                label: 'Cost',
                data: revenueData.map((data) => data.cost),
                backgroundColor: '#FF3030',
                borderColor: '#FF3030',
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: 'Monthly Revenue & Cost',
              },
            },
          }}
        />
      </div>

      <div className="rounded-md shadow-md shadow-gray-500/45 p-2 bg-app-rojiso w-2/4 h-80">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Source',
              },
            },
          }}
        />
      </div>

      <div className="rounded-md shadow-md shadow-gray-500/45 p-2 bg-app-rojiso w-[41%] h-80">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                ],
                borderColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Sources',
              },
            },
          }}
        />
      </div>

      <div className="rounded-md shadow-md shadow-gray-500/45 p-2 bg-app-rojiso w-[41%] h-80">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            indexAxis: 'y',
            plugins: {
              title: {
                text: 'Revenue Source',
              },
            },
          }}
        />
      </div>
    </div>
  );
};
