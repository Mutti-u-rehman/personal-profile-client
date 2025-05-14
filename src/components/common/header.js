import React, { useEffect, useState } from 'react';
import MENU from './menu.constant';
import { Link } from 'react-router';
import "./hearder.css";


const Header = () => { 
    const [users, setUsers] = useState([]);
    const menuList = MENU; 

    useEffect(() => {
      
        async function fetchData() {
            try {
                const BASE_URL = process.env.REACT_APP_API_BASE_URL;
                const get_all_users_url = `${BASE_URL}/users`;
                const res = await fetch(get_all_users_url);
                console.log(BASE_URL);
                const data = await res.json();  // <== you need this
                console.log(data);
                if (data?.length)
                    setUsers(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }

        // fetchData();
    }, []);

    return (
        <>
            <header className='flex justify-between items-center py-4'>
                <div className='p-3  text-green-900'>
                    <p>My Profile</p>
                </div>

                <div className='flex xl:gap-6 md:gap-4 sm:gap-2'>
                    {menuList.map((menu, index) => {
                        const { name, icon, link, title } = menu;
                        return (
                            <div key={index} className='header-nav__effect flex items-center gap-2 text-green-900 hover:text-green-400'>
                                <i className={`fa fa-${icon}`}></i>
                                <Link to={link} className='text-sm'>{title}</Link>
                            </div>
                        );
                    })}
                </div>
            </header>
        </>
    );
}

export default Header;