import React from 'react'

export  function Savelocal(token) {
 
    localStorage.setItem("user", JSON.stringify(token));
}
export function gettoken() {
    const getuser = JSON.parse(localStorage.getItem("user"));

    return getuser;
}

