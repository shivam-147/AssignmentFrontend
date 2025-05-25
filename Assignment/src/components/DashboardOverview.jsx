import React from 'react';
import anatomy from '../assets/images/anatomy.png'
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
            Icon: () => (<FaLungs style={{
                color: '#EF7878',
                fontSize: '30px'
            }} />),
        },
        {
            name: 'Tooth',
            date: 'Date: 26 Oct 2001',
            value: 75,
            color: '#7dcdba',
            Icon: () => (<FaTooth style={{
                color: '#D2C5AB',
                fontSize: '30px'
            }} />),
        },
        {
            name: 'Bone',
            date: 'Date: 26 oct 2001',
            value: 75,
            color: '#fb7157',
            Icon: () => (<PiBoneFill style={{
                color: "#BEC1D0",
                fontSize: '30px'
            }} />),
        }
    ]


    return (
        <div className='dashboard-overview'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#3734A9'
            }}>
                <h2>Dashboard</h2>
                <h3>This weak</h3>
            </div>
            <div className='anatomy-section'>
                <div>
                    <img src={anatomy} alt="" />
                </div>
                <div className='status-card-container' >
                    {
                        organs.map((organ, index) => (
                            <StatusCard
                                key={index}
                                name={organ.name}
                                date={organ.date}
                                Icon={organ.Icon}
                                value={organ.value}
                                color={organ.color}
                                iconColor={organ.iconColor}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
