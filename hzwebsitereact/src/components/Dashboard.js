import React,{useState,useEffect} from 'react';
import "../css/Dashboard.css";
import Chart from "react-google-charts";
//  import {db} from "../firebase.js";


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
        //  db.collection('exams').add({
        //      title:'hello'
        //  })
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
               <th>Quartile</th>
               <th>course</th>
            <th>Exam</th>
            
            <th>credits</th>
            <th>grade</th>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               <td rowSpan='3'>1</td>
               <td>CU75002V2 - Computer science basics</td>
            <td>TOETS01 - Theorietentamen</td>
           
            
            <td>7.50</td>
            <td><input onChange={(e)=>setToets1(e.value)}  type="text" value={toets1}></input></td>
          </tr>

           <tr style={{"background-color": 'yellow'}}>
               <td>CU75002V2 - Programme and Career Orientation</td>
              
            <td>TOETS01 - Assesment</td>
           
            
            <td>2.50</td>
            <td><input onChange={(e)=>setToets1(e.value)}  type="text" value={toets1}></input></td>
          </tr>

           <tr style={{"background-color": 'yellow'}}>
               <td>CU75002V2 - Programming Basics</td>
            <td>TOETS01 - Casus toets</td>
           
            
            <td>5.00</td>
            <td><input onChange={(e)=>setToets1(e.value)}  type="text" value={toets1}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               <td rowSpan='2' >2</td>
               <td rowSpan='2'>CU75004V1 - Object-oriented programming</td>
            <td>TOETS01 - Casustoets</td>
           
            
            <td>5.00</td>
            <td><input onChange={(e)=>setToets2(e.value)}  type="text" value={toets2}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               {/* <td  >2</td> */}
               
            <td>TOETS02 - groepsopdracht</td>
            
            <td>5.00</td>
            <td><input onChange={(e)=>setToets3(e.value)}  type="text" value={toets3}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
                <td rowSpan='4'>3</td>
                <td>Framework Development 1</td>
            <td>Case study</td>
          
            
            <td>5.00</td>
            <td><input onChange={(e)=>setToets4(e.value)}  type="text" value={toets4}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               <td rowSpan='3'>Framework Project 1</td>
            <td>Project</td>
           
            
            <td>2.50</td>
            <td><input onChange={(e)=>setToets5(e.value)}  type="text" value={toets5}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               
            <td>assesment</td>
           
           
            <td>2.50</td>
            <td><input onChange={(e)=>setToets5(e.value)}  type="text" value={toets5}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               
            <td>Report</td>
           
           
            <td>2.50</td>
            <td><input onChange={(e)=>setToets5(e.value)}  type="text" value={toets5}></input></td>
          </tr>

          {/* <tr style={{"background-color": 'yellow'}}>
               
            <td>TOETS02 - Portfolio assesment</td>
           
            <td>CU75068V1 - Personal Professional Development Exploration</td>
            <td>12.50</td>
            <td><input onChange={(e)=>setToets6(e.value)}  type="text" value={toets6}></input></td>
          </tr> */}

          

          <tr style={{"background-color": 'yellow'}}>
               <td rowSpan='3'>4</td>
                <td rowSpan='3'>Framework Project 2</td>
            <td>Portfolio</td>
           
           
            <td>5.00</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

           <tr style={{"background-color": 'yellow'}}>
              
            <td>Project</td>
           
            
            <td>5.00</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

           <tr style={{"background-color": 'yellow'}}>
                
            <td>Assesment</td>
           
           
            <td>5.00</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
                <td>entire year</td>
            <td>Portfolio</td>
            <td>Portfolio</td>
           
           
            <td>12.50</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

           <tr style={{"background-color": 'yellow'}}>
                <td>entire year</td>
            <td>Personality 1</td>
            <td>Personality 1</td>
           
           
            <td>1.25</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
                <td>entire year</td>
            <td>Personality 2</td>
            <td>Personality 2</td>
           
           
            <td>1.25</td>
            <td><input onChange={(e)=>setToets7(e.value)}  type="text" value={toets7}></input></td>
          </tr>

          <tr style={{"background-color": 'yellow'}}>
               
            <td>Totaal</td>
           
            <td></td>
            <td></td>
            <td>45</td>
            <td>{q1+q2+q3+q4}</td>
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
