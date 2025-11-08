import React, { useState } from 'react'
import {Link } from 'react-router-dom';
function form() {
  return (
    <div style={{display:"grid", placeItems:"center", height:"50vh"}}>
      <h2>Fill The Form To Generate Jokes</h2>
        <form style={{padding:"30px", border:"5px solid red" ,borderRadius:"25px",boxShadow:"14px 14px 4px red"}}>
            <label style={{padding:"10px",fontFamily:"cursive"}}>Name</label>
            <input type='text' placeholder='Enter Your name' style={{padding:"10px",borderRadius:"5px"}}></input>
            <br></br><br></br>
            <label style={{padding:"10px" ,fontFamily:"cursive"}}>Email</label>
            <input type='email' placeholder='Enter Your Email' style={{padding:"10px",borderRadius:"5px"}}></input>
            <br></br><br></br>
            <p style={{border:"5px solid black", padding:"10px",borderRadius:"15px"}}><Link to={"/login"} 
            style={{display:"grid",placeItems:"center",textDecoration:"None",fontSize:"20px",color:"yellow",fontWeight:"bold"}}>Submit</Link>
            </p>
        </form>
    </div>
  )
}

export default form;