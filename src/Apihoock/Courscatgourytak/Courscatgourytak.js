import { useState, useEffect } from 'react';

export function useCourscatgourytak(href) {
    const [datacourstak, setdatacourstak] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!href) return;

        setLoading(true);
        fetch(`https://renderme-irxt.onrender.com/courses/category/${href}`, {
            method: "GET"
        })
            .then(responsetak => {
                if (responsetak.ok) {
                    console.log("واکشی تک با موفقیت انجام شد")
                } else {
                    console.log("واکشی تک با موفقیت انجام نشد")

                }
                return responsetak.json();
            })
            .then(data => {
                setdatacourstak(data);
                setLoading(false);
                console.log(data)
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

    }, [href]);  // اجرا هنگام تغییر دسته‌بندی

    return { datacourstak, loading, error };
}
