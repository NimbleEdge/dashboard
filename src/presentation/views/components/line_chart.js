import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";

  function AnalyticsLineChart(props) {
    const cloud_metric = props.cloud_metric;
    const edge_metric = props.edge_metric;
    const [data, setData] = useState([]);
    var counter = 0

    useEffect(()=>{
     var temp=[];
      for(var index = 0;index<20;index++){
        temp.push({
          cloud:cloud_metric[cloud_metric.length - 20 + index]["Inference"]/1000,
          edge:edge_metric[edge_metric.length - 20 + index]["Inference"]/1000,
          unit:"Millis "
        })
      }
        setData(temp)
    },[]);

    return (
      <ResponsiveContainer debounce={300} width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 64,
            right: 72,
            left: 20,
            bottom: 64,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit=" millls" width={100} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="edge" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="cloud" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  export default AnalyticsLineChart;
