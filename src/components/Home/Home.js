import React from 'react';
import { Link } from 'react-router-dom';

import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Search from '../SearchPage/SearchPage';
import style from './Home.module.scss';


const Home = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.home_header}> 
                    <div className={style.home_header_body}>
                        <Link to="/gmail">Gmail</Link>
                        <Link to="/search">Search</Link>
                        <AppsIcon className={style.icon}/>
                        <AccountCircleIcon className={style.icon}/>
                    </div>
                </div>
            </div>

            <div className={style.logo_body}>
                <div className={style.logo_resp}>
                    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="google"/>
                </div>
            {/* for Search Page */}
                <div className={style.input_container}> 
                    <Search />
                </div>
            </div>

        </div>
    )
}
export default Home;
