import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {frontEndRoutes} from '../Routes/Routes.JS';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import './NavBar.css';

const NavBar = () => {
    let searchBox = useRef();
    let crossBtnMove = useRef();

    let search = (e) => {
       e.preventDefault();
       searchBox.current.classList.add('active'); 
       crossBtnMove.current.classList.add('btn_active'); 
    }
    
    
    let crossBtn = (e) => {
        e.preventDefault();
        searchBox.current.classList.remove('active'); 
        crossBtnMove.current.classList.remove('btn_active'); 
    }
    
    
  

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="public/LOGO.svg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 mt-0">
                        {
                            frontEndRoutes.map((routes,id) => (
                                <li key={id} className="nav-item">
                                   <Link to={routes.path} className="nav-link" aria-current="page">{routes.title}</Link>
                                </li>
                            ))
                        }
                    </ul>


                    <ul className='icons mb-0'>
                        <li><a onClick={search} href=""><IoIosSearch /></a></li>
                    </ul>
                    </div>
                </div>
            </nav>



            <div ref={searchBox} className="search_box">
                <span onClick={crossBtn} ref={crossBtnMove} className='cross_btn'><RxCross2 /></span>
            </div>
        </div>
    );
};

export default NavBar;