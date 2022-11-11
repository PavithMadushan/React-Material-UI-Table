//import React from 'react';
//import {Container,Row,Col} from 'react-bootstrap';
//import './App.css';
//import Slide from './components/Layout/Slide';
import MaterialTable from 'material-table';
import React,{useState} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


const Table =()=>{


    const[tableData,setTableData]=useState([
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
        {tid:"TID12345678",des:"Travel to India for FAO volunteering",rd:"2022-10-01",dd:"2022-10-01",ad:"2022-10-01"},
      ]);
      const column=[
        {title:"International Travel ID",field:"tid"},
        {title:"Description",field:"des",align:"des"},
        {title:"Requested Date",field:"rd"},
        {title:"Depature Date",field:"dd",emptyValue:()=><em>null</em>},
        {title:"Arrival Date",field:"ad"},
        //{title:"Actions",field:"action"},
    
      ]





    return(

        <div className="App">
      <h3 align="center">My Requestes</h3>
      

      <MaterialTable columns={column} data={tableData} 

          editable={{
            onRowDelete:(selectedRow)=>new Promise((resolve, reject) => {
                const updatedData=[...tableData]
                updatedData.splice(selectedRow.tableData.tid,1)
            }),

            onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                     setTimeout(()=>resolve(),500)
            })
          }} 



      options={{searchAutoFocus:true,
                exportButton:true,
                exportAllData:true,
                rowStyle:{background:"#f5f5f5"},
                headerStyle:{background:"green",fontStyle:"italic"}
    }}
      title=""/>
      
    </div>
        
    )
}

export default Table;