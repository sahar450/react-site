import React, { useState  } from 'react';
import './Coursinfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
export default function CoursinfoT() {
    const [acardonchang, setacardonchang] = useState(false);
    const acardonfun = () => {
        setacardonchang((prve) => !prve)
    }
    

    return (
        <>
            <Container>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <div className='Breadcrumb'>
                            <div>
                                <i class="fa-solid fa-house Breadcrumb-icon"></i>
                            </div>
                            <div>
                                <Link to={'/'}>خانه</Link>
                                <span> <i class="fa-solid fa-angle-left Breadcrumb-icon-angle"></i> </span>
                                <Link to={'/'} >  آموزش برنامه نویسی فرانت اند </Link>
                                <span> <i class="fa-solid fa-angle-left Breadcrumb-icon-angle"></i> </span>
                                <Link to={'/'} >  دوره متخصص جاوا اسکریپت</Link>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className='cours-info-right-title'>
                            <h4>متن تستی</h4>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>


                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className='cours-info-left-title'>
                            <video class="Info_left_video" src="" poster="/images/cityscape-frankfurt-downtown-sunset-germany_1268-20926.jpg" controls=""></video>

                        </div>
                    </Col>
                </Row>
                {/* right */}
                <Row>
                    <Col lg={8} md={8} xs={12}>
                        <Row>
                            {/* 1 */}
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={8} xs={6}>
                                <div class="cours-info_box-detile">
                                    <i class="fa-solid fa-graduation-cap CourseBoxes_box_icon"></i>
                                    <div>
                                        <h6>وضعیت دوره:</h6>
                                        <h6 id="ditilecours1">به اتمام رسیده</h6>
                                    </div>
                                </div>
                            </Col>
                            {/* 1 */}
                            {/* 2 */}
                            <Col lg={12} md={12} xs={12}>
                                <div className='prograss-bar'>
                                    <div className='prograss-bar-title'>
                                        <i class="fa-solid fa-chart-line CourseProgress_icon"></i>
                                        <h5>
                                            درصد پیشرفت دوره
                                        </h5>
                                    </div>
                                    <div className='progras'>
                                        <div className='progras-item'>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* 2 */}
                            {/* 3 */}
                            <Col lg={12} md={12} xs={12}>
                                <div className='cours-info-artical'>
                                    <h5>آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار</h5>
                                    <img src={`${process.env.PUBLIC_URL}/images/1.gif`} width="100%" />
                                    <p>
                                        کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید! در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                                    </p>
                                    <img src={`${process.env.PUBLIC_URL}/images/2.jpg`} width="100%" />
                                    <p>
                                        کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید! در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                                    </p>
                                    <div>
                                        <button className='acardon-btn' onClick={acardonfun}> معرفی دوره </button>
                                        <div className='acardon-txt' style={{ display: acardonchang ? 'block' : 'none' }}>
                                            <a class="accordion_box1_link" href="#">
                                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* 3 */}
                        </Row>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                        <Row>
                            <div className="sticky_left">
                                {/* وضعیت دانشجو */}
                                <Col xs={12}>
                                    <div className="info_ditile_left">
                                        <div className="info_ditile_left_txt">
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            دانشجوی دوره هستید
                                        </div>
                                    </div>
                                </Col>

                                {/* تعداد دانشجویان و آمار دوره */}
                                <Col xs={12}>
                                    <div className="left_number_student">
                                        <div className="left_number_student_txt">
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            دانشجوی دوره هستید
                                        </div>
                                        <div className="left_number_student_coment">
                                            <div>
                                                <i className="fa-regular fa-comments"></i>
                                                <span>67 دیدگاه</span>
                                            </div>
                                            <div>
                                                <i className="fa-regular fa-eye"></i>
                                                <span>14,234 بازدید</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* لینک کوتاه */}
                                <Col xs={12}>
                                    <div className="left_shortlink">
                                        <div className="left_shortlink_icon">
                                            <i className="fa-solid fa-link"></i>
                                            <span>لینک کوتاه</span>
                                        </div>
                                        <div>
                                            <input
                                                className="left_shortlink_input"
                                                type="text"
                                                value="https://sabzlearn.ir/?p=117472"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </Col>

                                {/* سرفصل‌های دوره */}
                                <Col xs={12}>
                                    <div className="left_see_link">
                                        <h6>سرفصل‌های دوره</h6>
                                        <span>
                                            برای مشاهده و یا دانلود دوره روی کلمه{" "}
                                            <a href="/">لینک</a>
                                            کلیک کنید
                                        </span>
                                    </div>
                                </Col>

                                {/* دوره‌های مرتبط */}
                                <Col xs={12}>
                                    <div className="Relatedcourses">
                                        <h6>دوره‌های مرتبط</h6>

                                        <div className="Relatedcourses_box">
                                            <a href="/">
                                                <img
                                                    className="Relatedcourses_img"
                                                    src={`${process.env.PUBLIC_URL}/images/courses/js_project.png`}
                                                    alt="دوره جاوا اسکریپت"
                                                />
                                                <span>پروژه‌های تخصصی با جاوا اسکریپت</span>
                                            </a>
                                        </div>

                                        <div className="Relatedcourses_box">
                                            <a href="/">
                                                <img
                                                    className="Relatedcourses_img"
                                                    src={`${process.env.PUBLIC_URL}/images/courses/js_project.png`}
                                                    alt="دوره جاوا اسکریپت"
                                                />
                                                <span>پروژه‌های تخصصی با جاوا اسکریپت</span>
                                            </a>
                                        </div>

                                        <div className="Relatedcourses_box">
                                            <a href="/">
                                                <img
                                                    className="Relatedcourses_img"
                                                    src={`${process.env.PUBLIC_URL}/images/courses/js_project.png`}
                                                    alt="دوره جاوا اسکریپت"
                                                />
                                                <span>پروژه‌های تخصصی با جاوا اسکریپت</span>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                </div>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
