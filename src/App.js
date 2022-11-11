
import './App.css';
//import Slide from './components/Layout/Slide';
//import MaterialTable from 'material-table';
import React,{useState} from 'react';
import Table from './components/Table';


function App() {
  /*const[tableData,setTableData]=useState([
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
    {title:"Actions",field:"action"},

  ]
  
  <h3 align="center">My Requestes</h3>
      

      <MaterialTable columns={column} data={tableData} title=""/>
      
  
  
  */
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
