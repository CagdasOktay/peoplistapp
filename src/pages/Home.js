import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';




export default function Home() {

    const [users,setUsers]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
        
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:9090/candidates/findall");
        setUsers(result.data);
    };

    const deleteCandidate=async (id)=>{
        await axios.delete(`http://localhost:9090/candidates/delete/${id}`)
        loadUsers()

    }



  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name-Surname</th>
      <th scope="col">Phone</th>
      <th scope="col">E-Mail</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
        <tr>
            <th scope="row" key={index}>{index+1}
            </th>
            <td>{user.nameSurname}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.date}</td>
            <td><button className="btn btn-primary mx-2">View</button>
            <Link className="btn btn-outline-primary mx-2"
            to={`/editcandidates/${user.id}`}
            >Edit</Link>
            <button className="btn btn-danger mx-2"onClick={()=>deleteCandidate(id)}>Delete</button></td>
        
        </tr>

     ))} 

   </tbody>
  </table>
 </div>
</div>
  );
}
