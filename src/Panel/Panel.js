import React, { useState } from 'react';
import './PPanel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetUserInfo } from '../Camponent/Getme/Getms';

export default function Panel() {
  const { userInfo, loading, error } = useGetUserInfo();
  const today = new Date().toLocaleDateString("fa-IR", {
    weekday: "long", // نام روز هفته
    day: "numeric", // روز ماه
    month: "long", // نام کامل ماه
    year: "numeric", // سال
  });
  console.log(today); // خروجی: سه‌شنبه ۲۹ اسفند ۱۴۰۳

  const funexit = () => {
    localStorage.clear();
    window.location.href = "/"; // تغییر مسیر به صفحه اصلی با استفاده از location.href
  }

  return (
    <>
      <div className='panel'>
        <Container fluid>
          <Row>
            <Col lg={3} >
              <div className='panel-rigth'>
                <div className='panel-rigth-title' >
                  {
                    userInfo && userInfo.name ? (<h5>  {userInfo.name}  </h5>) :
                      (<h5> در حال لود </h5>)
                  }
                  <p> {today} </p>
                </div>
                <div className='panel-menu-box'>
                  <ul className='panel-menu'>
                    <li>
                      <i className="fa-solid fa-user icon-panel"></i>
                      پنل کاربری
                    </li>
                    <li>
                      <i className="fa-solid fa-graduation-cap icon-panel"></i>
                      دوره های من
                    </li>
                    <li>
                      <i className="fa-solid fa-wallet icon-panel"></i>
                      کیف پول و تراکنش ها
                    </li>

                    <li>
                      <button className='btn-exit' onClick={funexit}>
                        <i className="fa-solid fa-circle-xmark icon-panel "></i>
                        خروج
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
