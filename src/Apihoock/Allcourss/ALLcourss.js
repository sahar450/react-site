import React, { useEffect, useState } from 'react'

export  function useALLcourss() {
    const [allcourssdata, setallcourssdata] = useState(null);
    useEffect(() => {
        fetch("https://renderme-irxt.onrender.com/courses", {
            method: "GET"
        }).then((resallcour) => {
            if (resallcour.ok) {
                console.log("دیتای کل کورس ها با موفقیت انجام شد")
            } else {
                console.log("دیتای کل کورس ها با موفقیت انجام نشد")

            }
            return resallcour.json()
        }).then((respansallcours)=>{
            console.log("ALL COURS ",respansallcours)
        })
    }, [])
    return {allcourssdata}
}
