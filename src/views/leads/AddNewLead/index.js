import React, { useState } from "react";
import * as xlsx from "xlsx";

const refreshPage = ()=>{
  window.location.reload();
}

const AddNewLead = () => {

  const [items, setItems] = useState([])

 const readExcel = (file) => {
    
    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader();
       fileReader.readAsArrayBuffer(file);

       fileReader.onload = (e) => {
         const bufferArray = e.target.result;
         
         const wb = xlsx.read(bufferArray, {type: "buffer"});

         const wsname = wb.SheetNames[0];

         const ws = wb.Sheets[wsname];

         const data = xlsx.utils.sheet_to_json(ws);

         resolve(data);
       };
       
       fileReader.onerror = (error) => {
         reject(error);
       };
    });
    
    promise.then((d) => {
      setItems(d);
      console.log(d);
    })
  }

  return (
  <div>
    <h2 className='ml-5'>Add New Leads</h2>
     <input type="file" className='mt-4 ml-5' onChange={(e) =>{
       const file = e.target.files[0];
       readExcel(file);
     }}/>

<table className="table container table-hover mt-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Comments</th>
    </tr>
  </thead>
  <tbody>
    {items.map((d)=>(
        <tr key={d.item}>
         <td>{d.Name}</td>
         <td>{d.Email}</td>
         <td>{d.Mobile}</td>
         <td>{d.Comments}</td>
      </tr>
      ))
    }
   </tbody>
    <button onClick={refreshPage} type="button" class="btn btn-warning mt-5 mr-2">Clear</button>
    <button type="button" class="btn btn-success mt-5">Save</button>
   </table>
  </div>
  );
};

export default AddNewLead;
