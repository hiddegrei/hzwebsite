import React,{useState,useEffect} from 'react';
import "../css/Dashboard.css";
import Chart from "react-google-charts";


function Dashboard() {
    const [toets1,setToets1]=useState(0);
    const [toets2,setToets2]=useState(0)
    const [toets3,setToets3]=useState(0)
    const [toets4,setToets4]=useState(0)
    const [toets5,setToets5]=useState(0)
    const [toets6,setToets6]=useState(0)
    const [toets7,setToets7]=useState(0)

    const [q1,setQ1]=useState(0)
    const [q2,setQ2]=useState(0)
    const [q3,setQ3]=useState(0)
    const [q4,setQ4]=useState(0)

    useEffect(()=>{
        if(toets1>5.5){
            setQ1(5)
        }
        if(toets2>5.5&&toets3>5.5){
            setQ2(10)
        }
        if(toets4>5.5&&toets5>5.5&&toets6>5.5){
            setQ3(15)
        }
        if(toets7>5.5){
            setQ4(5)
        }

    },[toets1,toets2,toets3,toets4,toets5,toets6,toets7])

    

    
    return (
        
        <div className="dash">
            

            <div style={{display:'flex'}}>

            <div className="dash__links">
                <nav class="sideNav">
          <ul>
            <li>
              <a href="https://learn.hz.nl/" target="_blank">Hz.nl</a>
            </li>
            <li>
              <a href="https://hz.nl/over-de-hz/regelingen-documenten-1/onderwijs-en-examenregelingen" target="_blank">CER</a>
            </li>

             <li>
              <a href="https://learn.hz.nl/" target="_blank"> Learn environment</a>
            </li>

            <li>
              <a href="https://teams.microsoft.com/go#id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiI1ZTNjZTZjMC0yYjFmLTQyODUtOGQ0Yi03NWVlNzg3ODczNDYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDcyNzU4YTAtYTQ0Ni00ZTBmLWEwYWEtNGJmOTVhNGExMGU3L3YyLjAiLCJpYXQiOjE2MzEwMTczNTQsIm5iZiI6MTYzMTAxNzM1NCwiZXhwIjoxNjMxMDIxMjU0LCJhY2N0IjowLCJhaW8iOiJBVVFBdS84VEFBQUFNU1gyc25UdjZJckZ2RnRuSnRyOWErRHZneHRQUzZYd1ZDMWZ4ZXoyUFY0NU9DYjZoUWRQNFJOaFdwd21mYzJuTWNUVExCaWttc2lNcWl3dWp2SWV4dz09IiwibmFtZSI6IkdyZWlqZGFudXMsIEguQS4gKGhpZGRlKSIsIm5vbmNlIjoiZGU2MmFiNTktYzhhZi00ZDZmLWE4YjUtOTllYzY4NmMxMDU4Iiwib2lkIjoiMDRmNzUzNzYtNTM3MS00ZTk5LThkOGItYTc1ZjE4NDY5MzRiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaC5hLmdyZWlqZGFudXNAc3R1ZGVudHMudXUubmwiLCJyaCI6IjAuQVR3QW9GZ24xMGFrRDA2Z3FrdjVXa29RNThEbVBGNGZLNFZDalV0MTduaDRjMFk4QU1BLiIsInN1YiI6IklqV0xuSUxLV2wwMm5yMkM1cEJyWkREeHo0WVlKUUdNeXRRY3FPNGZ6YlEiLCJ0aWQiOiJkNzI3NThhMC1hNDQ2LTRlMGYtYTBhYS00YmY5NWE0YTEwZTciLCJ1cG4iOiJoLmEuZ3JlaWpkYW51c0BzdHVkZW50cy51dS5ubCIsInV0aSI6ImoxcnQ5bEpBd1V5X0p3S2pnblZwQUEiLCJ2ZXIiOiIyLjAiLCJ4bXNfbXBjaSI6MjU5MjAwLCJ4bXNfcGNpIjozNjAwfQ.fHBE7iMsKwoEk3qt5OUXBKd5tPW6q2QvktQ3qYm16_7U_cAIWshaSTtH9LYZ8lhT5bDBfThwht81nwCG2SSxei4fwyLHJB6tCZt-lAbY7hKbP_nGUuy38yN5Pc33tQSFk7_rfDYCC7FGyMkM2cHgtr20WePTPgrCChBuXhbb0zEPiCuNLpEzGWglKcm5t5YED3pK9HcBVPCiuZfu7WqWAMsQtG0swsPb6YD6NpEVLLYksg02gRlihdgNMadxzXseXq4rq6v7uQnynoBnVYOH_HiI0Gnxxiqg5gJ_LboDtpS3blrt7YiajqlEkAVaZPGNC09g2haME5gk2y3ZUCjNsw&client_info=eyJ1aWQiOiIwNGY3NTM3Ni01MzcxLTRlOTktOGQ4Yi1hNzVmMTg0NjkzNGIiLCJ1dGlkIjoiZDcyNzU4YTAtYTQ0Ni00ZTBmLWEwYWEtNGJmOTVhNGExMGU3In0&state=eyJpZCI6IjBjNDM3Y2U4LTZjN2ItNDM0Zi05YTVkLTM3MDQ4NjFiNzYyOCIsInRzIjoxNjMxMDE3NjUxLCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3d&session_state=77b3dc12-1199-42fa-92cf-ad40667e7fbc" target="_blank"> Teams environment</a>
            </li>

            <li>
              <a href="https://apps.hz.nl/angular/studievoortgang/studiestatus" target="_blank">  study progress</a>
            </li>

             <li>
              <a href="https://github.com/hiddegrei/hiddegrei.github.io" target="_blank"> Github</a>
            </li>

          </ul>

      </nav>
            </div>

            <div className="dash__tableBox">
            <table  id="courses">
          <tr>
            <th>Exam</th>
            <th>Quartile</th>
            <th>course</th>
            <th>credits</th>
            <th>grade</th>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS01 - Theorietentamen</td>
            <td>1</td>
            <td>CU75002V2 - Computer science basics</td>
            <td>5.00</td>
            <td><input onChange={(e)=>setToets1(e.value)}  type="text" value={toets1}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS01 - Casustoets</td>
            <td>2</td>
            <td>CU75004V1 - Object-oriented programming</td>
            <td>5.00</td>
            <td><input onChange={(e)=>setToets2(e.value)}  type="text" value={toets2}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS02 - groepsopdracht</td>
            <td>2</td>
            <td>CU75004V1 - Object-oriented programming</td>
            <td>5.00</td>
            <td><input onChange={(e)=>setToets3(e.value)}  type="text" value={toets3}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS01 - Assesment website</td>
            <td>3</td>
            <td>CU75001V3 - Program- & Career Orientation</td>
            <td>2.50</td>
            <td><input onChange={(e)=>setToets4(e.value)}  type="text" value={toets4}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS01 - Language test</td>
            <td>3</td>
            <td>CU75068V1 - Personal Professional Development Exploration</td>
            <td>0.00</td>
            <td><input onChange={(e)=>setToets5(e.value)}  type="text" value={toets5}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS02 - Portfolio assesment</td>
            <td>3</td>
            <td>CU75068V1 - Personal Professional Development Exploration</td>
            <td>12.50</td>
            <td><input onChange={(e)=>setToets6(e.value)}  type="text" value={toets6}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
            <td>TOETS01 - Casustoets</td>
            <td>4</td>
            <td>CU75003V1 - Programming basics</td>
            <td>5.00</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>
        </table>
        <div className="dash__tableBox__data">
             <div class="dash__tableBox__data__row">
            <div class="dash__tableBox__data__color" style={{"background-color": 'yellow'}}></div>
            <div class="dash__tableBox__data__name">Not yet completed</div>
            </div>

            <div class="dash__tableBox__data__row">
            <div class="dash__tableBox__data__color" style={{"background-color": 'green'}}></div>
            <div class="dash__tableBox__data__name">passed</div>
            </div>

            <div class="dash__tableBox__data__row">
            <div class="dash__tableBox__data__color" style={{"background-color": 'red'}}></div>
            <div class="dash__tableBox__data__name">failed</div>
            </div>
        </div>
        </div>
        </div>

<div className="dash__graph">
         <Chart
   width={600}
    height={'500px'}
    chartType="AreaChart"
    loader={<div>Loading Chart</div>}
    data={[
       ['Quartile', 'Credits behaald', 'NBSA'],
          ['1',  q1,      45],
          ['2',  q2,      45],
          ['3',  q3,       45],
          ['4',  q4,      45]
    ]}
    options={{
      title: 'Credits',
          hAxis: {title: 'Quartile',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0, maxValue:60},
         
      // For the legend to fit, we make the chart area smaller
      //chartArea: { width: '50%', height: '70%' },
      // lineWidth: 25
    }}
  />
  </div>
            
        </div>
    )
}

export default Dashboard
