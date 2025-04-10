import React from 'react';
import { Savelocal,gettoken } from '../Storgelocal/Savelocal';

export  async function Sendinfo(information) {
  fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(information)
  }).then((respan)=>{
    if(respan.ok){
      console.log("عملیات با موفقیت انجام شد")
    }else{
      console.log("عملیات موفقیت آمیز نبود")
    }
    return respan.json()
  }).then((respans)=>{
    console.log(respans);
    Savelocal(respans.accessToken);

  }).catch((ee)=>{
    console.log("خطا",ee)
  })

}
export function sendinfolog(informationlog){
  
    fetch("https://renderme-irxt.onrender.com/v1/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(informationlog)
    }).then((respanlog)=>{
      if(respanlog.ok){
        console.log("ورود با موفقیت انجام شد")
      }else{
        console.log("ورود با موفقیت انجام نشد")

      }
      return respanlog.json()
    }).then((respanslog)=>{
      console.log(respanslog);
      Savelocal(respanslog.accessToken);
      
      const userunfo=gettoken();
      console.log(userunfo);
      window.location.href = "/"; 
    }).catch((eror)=>{
      console.log("خطا",eror)
    })
}
