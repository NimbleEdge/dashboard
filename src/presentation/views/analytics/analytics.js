import logo from "../../../assets/logos/nimbleedge.svg";
import icApiCalls from "../../../assets/icons/ic_api_calls.svg";
import icCost from "../../../assets/icons/ic_cost.svg";
import icDashboard from "../../../assets/icons/ic_dashboard.svg";
import icTime from "../../../assets/icons/ic_time.svg";
import icTimeAlt from "../../../assets/icons/ic_time_alt.svg";
import icPlaceholder from "../../../assets/icons/ic_placeholder.svg";
import { LineChart } from "recharts";
import AnalyticsLineChart from "../components/line_chart";
import MeterChart from "../components/meter_chart";
import AnalyticsBarChart from "../components/bar_chart";
import { useState, useEffect } from "react";
import { getRequest } from "../../../data/data-source/remote";
import { DASHBOARD_ANALYTICS } from "../../../core/consts";
import { InfinitySpin } from  'react-loader-spinner'


function Analytics(props) {
const [analyticsData, setanalyticsData] = useState({});
const REFRESH_MS = 2000;

useEffect(() => {
    const interval = setInterval(() => {
        getRequest(DASHBOARD_ANALYTICS).then((analyticsData)=>{
            console.log("new api call");        
            setanalyticsData(analyticsData);
            // makeToast();
            });}, REFRESH_MS);
  
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

return (
<div>
   {analyticsData.cloud_avg ? (
   <div className="analytics">
      <div className="left-pane">
         <img className="logo" src={logo}></img>
         <div className="left-pane-tab selected">
            <img className="tab-icon" src={icDashboard}></img>
            <p className="tab-text">Dashboard</p>
         </div>
         <div className="left-pane-tab">
            <img className="tab-icon" src={icPlaceholder}></img>
            <p className="tab-text">Settings</p>
         </div>
      </div>

      <div className="divider">&nbsp;</div>

      <div className="right-pane">
         <div className="page-heading">
            <p className="page-title">Dashboard</p>
            <p className="page-subtitle">Analytical Updates.</p>
         </div>
         <div className="row-1">
            <div className="row-1-card spacer card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icApiCalls}></img>
                  <div className="card-header">
                     <p className="card-title">Cloud</p>
                     <p className="card-subtitle">API Calls</p>
                  </div>
               </div>
               <div className="absolute-center">
               <p className="card-1-main">{analyticsData["cloud_count"]}</p>
               <p className="ms">api calls</p>
               </div>
            </div>
            <div className="row-1-card spacer card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icApiCalls}></img>
                  <div className="card-header">
                     <p className="card-title">Edge</p>
                     <p className="card-subtitle">API Calls</p>
                  </div>
               </div>
               <div className="absolute-center">
               <p className="card-1-main">{analyticsData["edge_count"]}</p>
               <p className="ms">api calls</p>
               </div>            
               </div>
            <div className="row-1-card spacer card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icTimeAlt}></img>
                  <div className="card-header">
                     <p className="card-title">Cloud</p>
                     <p className="card-subtitle">Latency Average</p>
                  </div>
               </div>
               <div className="absolute-center">
               <p className="card-1-main">{Number(analyticsData["cloud_avg"]/1000).toFixed(2)}</p>
               <p className="ms">milliseconds</p>
               </div>
            </div>
            <div className="row-1-card card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icTimeAlt}></img>
                  <div className="card-header">
                     <p className="card-title">Edge</p>
                     <p className="card-subtitle">Latency Average</p>
                  </div>
               </div>
               <div className="absolute-center">
               <p className="card-1-main">{Number(analyticsData["edge_avg"]/1000).toFixed(2)}</p>
                <p className="ms">milliseconds</p>
               </div>
            </div>
         </div>
         <div className="row-2">
            <div className="row-2-card spacer card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icCost}></img>
                  <div className="card-header">
                     <p className="card-title">Cost Comparision</p>
                     <p className="card-subtitle">Cloud v/s Edge</p>
                  </div>
               </div>
               <p className="bar-graph"></p>
               <AnalyticsBarChart
               cloudCost = {1.34 * analyticsData["cloud_count"]}
               edgeCost = {1.34 * 0.6 * analyticsData["edge_count"]}
               ></AnalyticsBarChart>
            </div>
            <div className="row-2-card card-common">
               <div className="card-flex expand-child">
                  <img className="card-icon" src={icCost}></img>
                  <div className="card-header">
                     <p className="card-title">Savings Percentage</p>
                     <p className="card-subtitle">Cloud v/s Edge</p>
                  </div>
               </div>
               <div className="card-2-main">
               <p className="">• Server cost: <span className="highlight">1.34 Cents / hit</span></p>
               <p className="">• Edge cost: <span className="highlight">0.80 Cents / hit</span></p>
               </div>
               <MeterChart className="meter-chart"></MeterChart>
            </div>

         </div>
         <div className="row-3">
            <div className="row-3-card card-common">
               <div className="card-flex">
                  <img className="card-icon" src={icTime}></img>
                  <div className="card-header">
                     <p className="card-title">Latency Comparision</p>
                     <p className="card-subtitle">Cloud v/s Edge</p>
                  </div>
               </div>
               <div className="card-3-main"></div>
               <AnalyticsLineChart
                  cloud_metric={analyticsData["cloud_mets"]}
                  edge_metric={analyticsData["edge_mets"]}
                  ></AnalyticsLineChart>
            </div>
         </div>
      </div>
   </div>
   ) : 
   <div className="loading">
    <InfinitySpin 
  width='200'
  color="#6565FF"
/>
   </div>
   }
</div>
);
}

export default Analytics;