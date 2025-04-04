import { useState, useEffect } from "react";
import { gettoken } from "../Storgelocal/Savelocal";

export function useGetUserInfo() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userToken = gettoken();
        if (!userToken) {
            setLoading(false);
            return;
        }

        fetch("https://renderme-irxt.onrender.com/auth/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${userToken}` }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user info");
            }
            return response.json();
        })
        .then((data) => {
            setUserInfo(data);
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });
    },[]);

    return { userInfo, loading, error };
}
