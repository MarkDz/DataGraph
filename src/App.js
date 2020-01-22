import React from "react";
import Chart from "./Graph";
import CustomizedTables from "./Table";


// data variable stores an array of key/value points that are displayed on the graph
const data = [
  { a: 1, b: 3, c: 10 },
  { a: 3, b: 20, c: 12 },
  { a: -1, b: -5, c: -4 },
];

/**
 * @param None
 * @public
 */
// main app that renders chart and table components
const App = () => (
  <div className="app">
    <h1>Chart and Table Example</h1>

    <section className="chart"> 
      <Chart data={data} />
    </section>

    <section className="table">
      <CustomizedTables data={data} />
    </section>
    
  </div>
);

export default App;