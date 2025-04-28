import React, { useEffect, useState } from 'react';
import MENU from './menu.constant';
import { Link } from 'react-router';
// import settingIcon from '../../assets/icons/setting.svg?url';
// import Icon from './icon';


const Header = () => { 
    // const imageUrl = new URL(
    //     'mutti.jpg?as=webp&width=250',
    //     import.meta.url
    // );
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

        fetchData();
    }, []);

    return (
        <>
            <header className='flex justify-between items-center'>
                <div className=''>
                    <p>My Profile</p>
                    <i className="fa fa-home"></i>

                    {/* <i className="fa-mail"></i> */}
                    {/* <img src='imageUrl' /> */}
                    {/* <img src={settingIcon} /> */}
                    {/* <Icon name="setting.svg" folder="images" alt="Setting Icon" className="w-6 h-6" /> */}
                </div>

                {/* <div className='flex gap-4'>
                    {menuList.map((menu, index) => {
                        const { name, icon, link, title } = menu;
                        const iconAddress = '/assets/icons/';
                        return (
                            <div key={index} className='flex items-center gap-2'>
                                <img
                                    src='/assets/icons/setting.svg'
                                    // src={`${iconAddress}${icon}`}
                                    // alt={`${title} icon`}
                                    // className="size-6 text-blue-500"
                                />
                                <Link to={link} className='text-sm'>{title}</Link>
                            </div>
                        );
                    })}
                </div> */}
            </header>
        </>
    );
}

export default Header;