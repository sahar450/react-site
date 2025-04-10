import { useState, useEffect } from "react";
export function useCours() {
    const [datacours, setdatacours] = useState(null);
    useEffect(() => {

        fetch("https://renderme-irxt.onrender.com/v1/courses/popular", {
            method: "GET"
        }).then((respanscours) => {
            if (respanscours.ok) {
                console.log("واکشی کورس ها با موفقیت انجام شد")
            } else {
                console.log("واکشی کورس ها با موفقیت انجام نشد")

            }
            return respanscours.json()
        }).then((resdatacour)=>{
            console.log(resdatacour);
            setdatacours(resdatacour)
        }).catch((erorpapular)=>{
            console.log(erorpapular)
        })
    }, [])
    return {datacours}
}