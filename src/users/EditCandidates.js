import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditCandidates() {

    let navigate=useNavigate();

    const {id}=useParams();


    const [candidates,setCandidates]=useState({
        nameSurname:"",
        phone:"",
        email:""
    })

    const{namesurname,phone,email}=candidates

    const onInputChange=(e)=>{

        setCandidates({...candidates,[e.target.name]:e.target.value})

    };

    useEffect(()=>{
        loadUser();
    },[]); 

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/candidates/save/${id}`,candidates)
        navigate("/");

    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:9090/candidates/update/${id}`,candidates)
        setCandidates(result.data)
    }



  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'>Edit Candidate</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor="nameSurname" className='form-label'>
                    Name Surname
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name and surname"
                    name="nameSurname"
                    value={namesurname}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="phone" className='form-label'>
                    Phone
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your mobilephone"
                    name="phone"
                    value={phone}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>
                    E-Mail
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2'to="/">Cancel</Link>
            </form>
        </div>
    </div>
    </div>
  );
}
