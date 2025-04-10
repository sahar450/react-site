import { useState, useEffect } from "react";

export function useMenuss() {
  const [menudetile, setmenudetile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("شروع درخواست به /v1/menus");
    setLoading(true);
    fetch("https://renderme-irxt.onrender.com/v1/menus", {
      method: "GET",
    })
      .then((responsmenu) => {
        console.log("وضعیت پاسخ:", responsmenu.status);
        if (!responsmenu.ok) {
          throw new Error(`خطا در دریافت منو: ${responsmenu.status}`);
        }
        console.log("منو با موفقیت دریافت شد");
        return responsmenu.json();
      })
      .then((resmenudetile) => {
        console.log("داده دریافتی:", resmenudetile);
        setmenudetile(resmenudetile);
      })
      .catch((errormenu) => {
        console.error("خطا:", errormenu);
        setError(errormenu.message);
      })
      .finally(() => {
        setLoading(false);
      });
  },[]);

  return { menudetile, loading, error };
}