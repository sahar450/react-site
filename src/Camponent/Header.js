import React, { useState } from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useGetUserInfo } from './Getme/Getms';
import { useMenu } from '../Apihoock/Menu';
import { useALLcourss } from '../Apihoock/Allcourss/ALLcourss';
export default function Header() {
    const [clickbtn, setclickbtn] = useState(false);
    const funmenu = () => {
        setclickbtn((preclickbtn) => !preclickbtn)
    }

    const { userInfo, loading, error } = useGetUserInfo();
    const { menudetile } = useMenu();
    console.log(menudetile);
    const { allcourssdata } = useALLcourss();
    return (
        <>
            <header dir='rtl'>
                <div className='minbox-header'>
                    <div className='show-menu'>
                        <ul className='menu-header'>
                            <li>  <Link to="/" >   صفحه اصلی    </Link></li>
                            {
                                menudetile && menudetile.length > 0 ? (
                                    menudetile.map((item) => (
                                        <li key={item.id}>
                                            <Link to={`/Catgoury/${item.href}`}> {item.title}
                                                {
                                                    item.submenus && item.submenus.length > 0 && (
                                                        <ul className='sub-menu'>
                                                            {item.submenus.map((itemsub) => (
                                                                <li key={itemsub.id}>
                                                                    <Link to={`/Coursinfo/${itemsub.href}`}> {itemsub.title} </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )
                                                }
                                            </Link>

                                        </li>
                                    ))
                                ) : (
                                    <li>در حال بارگذاری...</li> // در صورتی که منو هنوز بارگذاری نشده باشد
                                )
                            }
                        </ul>
                    </div>
                    <div className='btn-res'>
                        <button onClick={funmenu}><i className="fa-solid fa-bars btn-bars-res"></i></button>
                    </div>
                    <div className='nav-left'>
                        <div className='left-nav_search_icon'>
                            <a><i className="fa-solid fa-magnifying-glass nav_search_icon"></i></a>
                        </div>
                        <div className='left-nav_search_icon'>
                            <a><i className="fa-solid fa-cart-shopping nav_search_icon "></i></a>
                        </div>
                        <div className='left-info'>
                            {userInfo ? (
                                <Link to="/Panel" className="nav_search_icon">
                                    {userInfo.name}
                                </Link>
                            ) : (
                                <Link to="/LogRI" className="nav_search_icon">
                                    ثبت نام/ورود
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='res-menu-box' style={{ display: clickbtn ? 'block' : 'none' }}>
                    <ul className='res-menu'>
                        <li>صفحه اصلی </li>
                        <li>فرانت اند</li>
                        <li>بک اند</li>
                    </ul>
                </div>
            </header>
        </>
    );
}
