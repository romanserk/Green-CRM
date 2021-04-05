import React, { useState } from "react";
import * as xlsx from "xlsx";

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
    <h2>Add New Leads</h2>
     <input type="file" className='mt-4' onChange={(e) =>{
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
         <th>{d.Name}</th>
         <td>{d.Email}</td>
         <td>{d.Mobile}</td>
         <td>{d.Comments}</td>
      </tr>
      ))
    }
  </tbody>
</table>

  </div>
  );
};

export default AddNewLead;
