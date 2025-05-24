import React from 'react'
import { Search, Bell } from 'lucide-react'
import profileImg from "../../assets/images/profile.png"


function Header() {
    return (
        <div className='header'>
            <div>
                <span
                    style={{
                        color: '#2ACCDA',
                        fontWeight: 'bold',
                        fontSize: '25px'
                    }}
                >
                    Health
                </span>
                <span
                    style={{
                        color: '#3734A9',
                        fontWeight: 'bold',
                        fontSize: '25px'
                    }}
                >
                    care
                </span>
            </div>
            <div className='search-box'>
                <Search className='search-icon' />
                <input type="text" placeholder='Search' />
                <Bell color='blue' className='notification-icon' />
            </div>
            <div className='profile'>
                <img src={profileImg} className='profile-img' alt="Profile" />
                <button className='btn'> + </button>
            </div>
        </div>
    )

}

export default Header