import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCourscatgourytak } from '../../Apihoock/Courscatgourytak/Courscatgourytak';
import './Courstak.css';
import { Link } from 'react-router-dom';

export default function Coursestak({ href }) {
    const { datacourstak, loading, error } = useCourscatgourytak(href);

    if (loading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت داده‌ها: {error}</p>;

    return (
        <Container>
            <Row>
                {datacourstak.length > 0 ? (
                    datacourstak.map((itempop, index) => (
                        <Col key={index} md={6} lg={3} xs={12}>
                            <Link>
                                <div className='cours-box'>
                                    <img className='cours-box-img' src={`${process.env.PUBLIC_URL}/images/cityscape-frankfurt-downtown-sunset-germany_1268-20926.jpg`} width='100%' alt='Course' />
                                    <div className='cours-box-title'>
                                        <h6>{itempop.name}</h6>
                                    </div>
                                    <div className='cours-box-detile'>
                                        <p>مدرس: {itempop.instructor || "نامشخص"}</p>
                                        <p>قیمت: {itempop.price || "رایگان"}</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))
                ) : (
                    <p>هیچ دوره‌ای یافت نشد.</p>
                )}
            </Row>
        </Container>
    );
}
