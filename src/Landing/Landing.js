import React, { useEffect, useState } from 'react';
import './landing.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Landing() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const stopsetlanding = setInterval(() => {
      if (number < 100) {
        setNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(stopsetlanding);
      }
    }, 100);

    return () => clearInterval(stopsetlanding); // پاک کردن interval هنگام unmount شدن
  }, [number]);

  const [txtchang, settxtchang] = useState("");
  
  useEffect(() => {
    let txt = "اولین گام برنامه‌نویس شدن";
    let index = -1;
    const intervalchangtxt = setInterval(() => {
      settxtchang((prevtxtchang) => prevtxtchang + txt[index]);
      index += 1;
      console.log(txt[index],index);
      if (index === txt.length-1) {
        clearInterval(intervalchangtxt);
      }
    }, 100);

    return () => clearInterval(intervalchangtxt); 
  }, []);

  return (
    <>
      <div dir="rtl" className="landing">
        <div className="landing-title">
          <h1>{txtchang}</h1>
        </div>
        <div className="landing-searchbar">
          <input
            id="landing-searchbar-input"
            type="text"
            placeholder="جستجو در بین دوره ها"
          />
          <label htmlFor="landing-searchbar-input">
            <i className="fa-solid fa-magnifying-glass landing-searchbar-icon "></i>
          </label>
        </div>
        <div>
          <div className="landing-end-icon">
            <div className="landing-end-icon-item">
              <i className="fa-solid fa-clock landing-clock-icon "></i>
              <p>{number}</p>
            </div>
            <div className="landing-end-icon-item">
              <i className="fa-solid fa-book landing-clock-icon"></i>
              <p>{number}</p>
            </div>
            <div className="landing-end-icon-item">
              <i className="fa-solid fa-graduation-cap landing-clock-icon"></i>
              <p>{number}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
