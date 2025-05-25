import React from 'react';
import anatomy from '../assets/images/anatomy.png'
import lungs from '../assets/images/lungs.png'
import tooth from '../assets/images/tooth.png'
import bone from '../assets/images/bone.png'
import StatusCard from './Cards/StatusCard';
import Activity from './Activity/ActivityComponent';

export default function DashboardOverview() {

    const organs = [
        {
            name: 'Lungs',
            date: 'Date: 26 Oct 2001',
            value: 75,
            color: '#ac4447',
            icon: lungs,
            alt: 'lungs image'
        },
        {
            name: 'Tooth',
            date: 'Date: 26 Oct 2001',
            value: 75,
            color: '#7dcdba',
            icon: tooth,
            alt: 'tooth image'
        },
        {
            name: 'Bone',
            date: 'Date: 26 oct 2001',
            value: 75,
            color: '#fb7157',
            icon: bone,
            alt: 'bone image'
        }
    ]


    return (
        <div className='dashboard-overview'>
            <div className='dashboard-head'>
                <h2>Dashboard</h2>
                <h3>This weak</h3>
            </div>

            <div className='anatomy-section'>
                <div className='anatomy-img'>
                    <img src={anatomy} alt="anatomy image" />
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
                                alt={organ.alt}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='activity'>
                <Activity />
            </div>
        </div>
    )
}
