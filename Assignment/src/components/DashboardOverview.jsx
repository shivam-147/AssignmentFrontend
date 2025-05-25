import React from 'react';
import anatomy from '../assets/images/anatomy.png'
import lungs from '../assets/images/lungs.png'
import tooth from '../assets/images/tooth.png'
import bone from '../assets/images/bone.png'

import { FaLungs } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { PiBoneFill } from "react-icons/pi";
import StatusCard from './Cards/StatusCard';

export default function DashboardOverview() {

    const organs = [
        {
            name: 'Lungs',
            date: 'Date: 26 Oct 2001',
            value: 75,
            color: '#ac4447',
            icon: lungs,
        },
        {
            name: 'Tooth',
            date: 'Date: 26 Oct 2001',
            value: 75,
            color: '#7dcdba',
            icon: tooth,
        },
        {
            name: 'Bone',
            date: 'Date: 26 oct 2001',
            value: 75,
            color: '#fb7157',
            icon: bone,
        }
    ]


    return (
        <div className='dashboard-overview'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                color: '#3734A9'
            }}>
                <h2>Dashboard</h2>
                <h3>This weak</h3>
            </div>

            <div className='anatomy-section'>
                <div className='anatomy-img'>
                    <img src={anatomy} alt="" />
                </div>
                <div className='status-card-container' >
                    {
                        organs.map((organ, index) => (
                            <StatusCard
                                key={index}
                                name={organ.name}
                                date={organ.date}
                                icon={organ.icon}
                                value={organ.value}
                                color={organ.color}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='activity'>
                <p>s adipisci architecto fugit culpa sapiente laborum nobis similique.</p>
                <p>s adipisci architecto fugit culpa sapiente laborum nobis similique.</p>
            </div>
        </div>
    )
}
