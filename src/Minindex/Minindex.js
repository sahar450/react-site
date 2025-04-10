import React, { useEffect, useState,useContext } from 'react';
import Landing from '../Landing/Landing';
import './minindex.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import Courses from '../Camponent/Courss/Courses';

export default function Minindex() {

  const slider = [
    { imag: `${process.env.PUBLIC_URL}/images/Untitled-4.jpg`, title: "one", modrs: "modres" },
    { imag: `${process.env.PUBLIC_URL}/images/Untitled-5.jpg`, title: "2", modrs: "modres" },
    { imag: `${process.env.PUBLIC_URL}/images/Untitled-6.jpg`, title: "3", modrs: "modres" }
  ];
  
  const [count,setcount]=useState(0);
  useEffect(() => {
    const stopSlider = setInterval(() => {
      setcount((prevCount) => (prevCount + 1) % slider.length);
    }, 3000); // هر ۳ ثانیه یکبار تغییر اسلاید

    return () => clearInterval(stopSlider);
  });


  return (
    <>
        <Landing/>
        <Container>
          <Row>
            <Col md={12} lg={12} xs={12} >
              <div className='cours-title-minindex'>
                <h6 className='cours-title-minindex-h6'>آخـــرین دوره های ما</h6>
                <h3>سکوی پرتاپ شما به سمت موفقیت</h3>
              </div>
            </Col>
          </Row>
        </Container>
        <Courses/>
        {/* <Courses/>
        <Courses/> */}
        <Container>
          <Row>
            <Col md={12} lg={12} xs={12}>
                <div className='cours-title-minindex'>
                  <h6 className='cours-title-minindex-h6-second'>  مــا چه کمکی میتونیم بهت بکنیم</h6>
                  <h3>  از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره</h3>
                </div>
            
            </Col>
            <Col md={6} lg={6} xs={12}>
                <div className='Features'>
                  <div className='Features-icon-icon'>
                       <i class="fa-solid fa-chalkboard Features-icon"></i>
                  </div>
                  <div className='Features-detiles'>
                      <h4>
                        تضمین کاملترین محتوا
                      </h4>
                      <p>
                      بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                      </p>
                  </div>
                </div>
            </Col>
            <Col md={6} lg={6} xs={12}>
                <div className='Features'>
                  <div className='Features-icon-icon'>
                       <i class="fa-solid fa-chalkboard Features-icon"></i>
                  </div>
                  <div className='Features-detiles'>
                      <h4>
                        تضمین کاملترین محتوا
                      </h4>
                      <p>
                      بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                      </p>
                  </div>
                </div>
            </Col>
            <Col md={6} lg={6} xs={12}>
                <div className='Features'>
                  <div className='Features-icon-icon'>
                       <i class="fa-solid fa-chalkboard Features-icon"></i>
                  </div>
                  <div className='Features-detiles'>
                      <h4>
                        تضمین کاملترین محتوا
                      </h4>
                      <p>
                      بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                      </p>
                  </div>
                </div>
            </Col>
            <Col md={6} lg={6} xs={12}>
                <div className='Features'>
                  <div className='Features-icon-icon'>
                       <i class="fa-solid fa-chalkboard Features-icon"></i>
                  </div>
                  <div className='Features-detiles'>
                      <h4>
                        تضمین کاملترین محتوا
                      </h4>
                      <p>
                      بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                      </p>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={12} lg={12} xs={12}>
                <div >
                      <a href='#' >
                                <div className='cours-box' >
                                    <div>
                                        <img className='cours-box-img' src={slider[count].imag} width='100%' />
                                    </div>
                                    <div className='cours-box-title'>
                                        <h4>{slider[count].title}</h4>
                                    </div>
                                    <div className='cours-box-detile'>
                                        <p>  {slider[count].modrs}</p>
                                        <p> قیمت </p>
                                    </div>
                                </div>
                            </a>
                </div>
            </Col>
          </Row>
        </Container>
        
    </>
  )
}
