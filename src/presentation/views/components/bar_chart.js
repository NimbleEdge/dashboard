import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name:'Per Hit',
    cloud: 1.34,
    edge: 1.34*0.6,
    amt: 1400,
  },

];


  function AnalyticsBarChart() {
    return (
      <ResponsiveContainer debounce={300} width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          height={300}
          data={data}
          margin={{
            top: 64,
            right: 52,
            left: 12,
            bottom: 64,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" unit=" cent" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="cloud" barSize={20} fill="#343441" />
          <Bar dataKey="edge" barSize={20} fill="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

  export default AnalyticsBarChart;

