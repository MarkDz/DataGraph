import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


/**
 * This component makes use of the "recharts" line chart to 
 * render a nice dynamic chart. 
 * 
 * 
 * @param props object
 *  
 */
const Chart = (props) => {
  
  return (
    <div>
    <LineChart width={1350} height={300} data={props.data}
               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="a" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="b" stroke="#82ca9d" />
      <Line type="monotone" dataKey="c" stroke="#ff6347" />
    </LineChart>
    </div>
  )}

export default Chart;