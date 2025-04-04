import { useState, useEffect } from "react";

export  function useMenu() {
       
    const [menudetile,setmenudetile]=useState(null);
    
    useEffect(()=>{
        fetch("https://renderme-irxt.onrender.com/menus",{
            method:"GET",
    
        }).then((responsmenu)=>{
            if(responsmenu.ok){
                console.log("منو با موفقیت دریافت شد")
            }else{
                console.log("منو با موفقیت دریافت نشد")
            }
            return responsmenu.json()
        }).then((resmenudetile)=>{
            console.log(resmenudetile)
            setmenudetile(resmenudetile)
        }).catch((errormenu)=>{
            console.log("خطا",errormenu)
        })
    },[])
    return {menudetile}
    
}
