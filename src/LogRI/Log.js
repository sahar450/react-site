import React, { useState, useEffect } from 'react';
import './Log.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Sendinfo ,sendinfolog} from '../Camponent/Sendinfo/Sendinfo';
export default function Log() {
    const [isActive, setIsActive] = useState(false);
    const toggleRegisterForm = () => setIsActive((prev) => !prev);

    // اطلاعات فرم ورود
    const [loginData, setLoginData] = useState({ identifier: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [touched, setTouched] = useState(false);

    // اطلاعات فرم ثبت‌نام
    const [register, setRegister] = useState({ name: "", username: "", email: "", phone: "", password: "", confirmPassword: "" });
    const [registerErrors, setRegisterErrors] = useState({});
    const [isRegisterValid, setIsRegisterValid] = useState(false);

    // هندل تغییرات اینپوت‌های ورود
    const handleInputChange = (event, id) => {
        setLoginData((prev) => ({ ...prev, [id]: event.target.value }));
        setTouched(true);
    };

    // اعتبارسنجی فرم ورود
    const validateForm = () => {
        let newErrors = {};
        if (!loginData.identifier.trim()) {
            newErrors.identifier = "نام کاربری نباید خالی باشد!";
        }
        if (loginData.password.length < 6) {
            newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد!";
        }
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    };

    useEffect(() => {
        if (touched) {
            validateForm();
        }
    }, [loginData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            console.log("فرم ورود ارسال شد!", loginData);
            sendinfolog(loginData);
        } else {
            console.log("فرم ورود نامعتبر است!");
        }
    };

    // هندل تغییرات اینپوت‌های ثبت‌نام
    const handleRegisterChange = (event, id) => {
        setRegister((prev) => ({ ...prev, [id]: event.target.value }));
    };

    // اعتبارسنجی فرم ثبت‌نام
    const validateRegister = () => {
        let newErrors = {};
        if (!register.name.trim()) {
            newErrors.name = "نام و نام خانوادگی نمیتواند خالی باشد";
        }
        if (!register.username.trim()) {
            newErrors.username = "نام کاربری نمیتواند خالی باشد";
        }
        if (!register.email.trim()) {
            newErrors.email = "ایمیل نمیتواند خالی باشد";
        }
        if (!register.phone.trim() || !/^\d{11}$/.test(register.phone)) {
            newErrors.phone = "شماره تلفن باید ۱۰ رقم باشد";
        }
        if (register.password.length < 6) {
            newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
        }
        if (register.confirmPassword !== register.password) {
            newErrors.confirmPassword = "رمز عبور و تأیید رمز باید یکسان باشند";
        }
        setRegisterErrors(newErrors);
        setIsRegisterValid(Object.keys(newErrors).length === 0);
    };

    useEffect(() => {
        validateRegister();
    }, [register]);

    const handleRegisterSubmit =  (event) => {
        event.preventDefault();
        if (isRegisterValid) {
            console.log("ثبت‌نام انجام شد!", register);
            Sendinfo(register);
        } else {
            console.log("فرم ثبت‌نام نامعتبر است!");
        }
    };

    return (
        <Container>
            <Row>
                <Col lg={6} className='log'>
                    <div>
                        <h5>ورود به حساب کاربری</h5>
                        <p>خوشحالیم دوباره میبینیمت دوست عزیز</p>
                        <div className='log-ri'>
                            <p>کاربر جدید هستید؟</p>
                            <button className='log-ri-btn' onClick={toggleRegisterForm}>ثبت نام</button>
                        </div>

                        {/* فرم ورود */}
                        <div style={{ display: isActive ? 'none' : 'block' }}>
                            <form className='loginform' onSubmit={handleSubmit}>
                                <input type='text' placeholder='نام کاربری یا آدرس ایمیل' value={loginData.identifier} onChange={(event) => handleInputChange(event, "identifier")} />
                                {errors.identifier && <p className='error-text'>{errors.identifier}</p>}
                                <input type='password' placeholder='رمز عبور' value={loginData.password} onChange={(event) => handleInputChange(event, "password")} />
                                {errors.password && <p className='error-text'>{errors.password}</p>}
                                <button className='loginform-btn' type="submit">ورود</button>
                            </form>
                        </div>

                        {/* فرم ثبت‌نام */}
                        <div style={{ display: isActive ? 'block' : 'none' }}>
                            <form className='loginform' onSubmit={handleRegisterSubmit}>
                                <input type='text' placeholder='نام و نام خانوادگی' value={register.name} onChange={(event) => handleRegisterChange(event, "name")} />
                                {registerErrors.name && <p className='error-text'>{registerErrors.name}</p>}
                                <input type='text' placeholder='نام کاربری' value={register.username} onChange={(event) => handleRegisterChange(event, "username")} />
                                {registerErrors.username && <p className='error-text'>{registerErrors.username}</p>}
                                <input type='text' placeholder='آدرس ایمیل' value={register.email} onChange={(event) => handleRegisterChange(event, "email")} />
                                {registerErrors.email && <p className='error-text'>{registerErrors.email}</p>}
                                <input type='text' placeholder='شماره تلفن' value={register.phone} onChange={(event) => handleRegisterChange(event, "phone")} />
                                {registerErrors.phone && <p className='error-text'>{registerErrors.phone}</p>}
                                <input type='password' placeholder='رمز عبور' value={register.password} onChange={(event) => handleRegisterChange(event, "password")} />
                                {registerErrors.password && <p className='error-text'>{registerErrors.password}</p>}
                                <input type='password' placeholder='تأیید رمز عبور' value={register.confirmPassword} onChange={(event) => handleRegisterChange(event, "confirmPassword")} />
                                {registerErrors.confirmPassword && <p className='error-text'>{registerErrors.confirmPassword}</p>}
                                <button className='loginform-btn' type="submit">ثبت نام</button>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
