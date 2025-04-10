import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useCours } from '../../Apihoock/Cours/Cours';
export default function Courses() {
    const { datacours } = useCours();

    return (
        <>
            <Container>
                <Row>
                {
                        datacours && datacours.length > 0 ? (
                            datacours.map((itempop) => (
                               
                                    <>
                                        <Col md={6} lg={3} xs={12}>
                                           <Link to={`/CoursinfoT/${itempop.shortName}`}>
                                                <div className='cours-box' >
                                                    <div>
                                                        <img className='cours-box-img' src={`${process.env.PUBLIC_URL}/images/Untitled-1.jpg`} width='100%' />
                                                    </div>
                                                    <div className='cours-box-title'>
                                                        <h6> {itempop.name} </h6>
                                                    </div>
                                                    <div className='cours-box-detile'>
                                                        <p>مدرس:</p>
                                                        <p> قیمت </p>
                                                    </div>
                                                </div>
                                                </Link>
                                        </Col>
                                       
                                    </>
                                )
                            )
                        ):( <li>در حال بارگذاری...</li>)
                    }
                   
                </Row>

            </Container>
        </>
    )
}
