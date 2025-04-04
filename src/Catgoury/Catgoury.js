import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Coursestak from '../Camponent/Courstak/Courtak';
import './Catgoury.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Catgoury() {
    const { href } = useParams(); // دریافت مقدار دسته‌بندی از URL
    console.log(href);
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <div className='Catgoury-header'>
                            {/* منوی کشویی مرتب‌سازی */}
                            <div className="Catgoury-menu-container">
                                <ul className='Catgoury-header-menu'>
                                    <li>
                                        مرتب سازی پیش فرض
                                        <ul className='Catgoury-header-sub-menu'>
                                            <li> <a >  مرتب سازی پیش فرض      </a>  </li>
                                            <li>   <a>  مرتب سازی بر اساس   ارزان ترین  </a>   </li>

                                            <li>     <a>مرتب سازی بر اساس گران ترین </a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* فیلد جستجو */}
                            <div className="search-container">
                                <input id='Catgoury-header-input' className='Catgoury-header-input' type='text' placeholder='جستجو...' />
                                <label htmlFor='Catgoury-header-input' className='Catgoury-header-icon-search'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </label>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ارسال مقدار href به Coursestak */}
            <Coursestak href={href} />
        </>
    );
}
