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
        if(toets1>=5.5){
            setQ1(5)
        }
        if(toets2>=5.5&&toets3>=5.5){
            setQ2(10)
        }
        if(toets4>=5.5&&toets5>=5.5&&toets6>=5.5){
            setQ3(15)
        }
        if(toets7>=5.5){
            setQ4(5)
        }
        

    },[toets1,toets2,toets3,toets4,toets5,toets6,toets7])
    

    

    
    return (
        
        <div className="dash">
            

            <div style={{display:'flex'}}>

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
