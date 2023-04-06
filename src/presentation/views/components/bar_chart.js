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


  function AnalyticsBarChart(props) {

    const data = [
      {
        name:'Total',
        Cloud: (props.cloudCost/100).toFixed(2),
        NimbleEdge: (props.edgeCost/100).toFixed(2),
        amt: 1400,
      },
    
    ];

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
          <XAxis type="number" unit="  USD" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Cloud" barSize={20} fill="#343441" />
          <Bar dataKey="NimbleEdge" barSize={20} fill="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

  export default AnalyticsBarChart;

