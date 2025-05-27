import anatomy from '../assets/images/anatomy.png'
import lungs from '../assets/images/lungs.png'
import tooth from '../assets/images/tooth.png'
import bone from '../assets/images/bone.png'
import StatusCard from './Cards/StatusCard';
import Activity from './Activity/ActivityComponent';
import { FiZoomIn } from "react-icons/fi";
import heart from '../assets/images/heart.png'
import ScannerCard from './Cards/ScannerCard';

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
                <h2 style={{
                    color: '#2F32A4'
                }}>Dashboard</h2>
                <h3
                    style={{
                        color: '#2F32A4'
                    }}>This weak</h3>
            </div>

            <div className='anatomy-section'>

                <div className='anatomy-img'>
                    <FiZoomIn style={{
                        fontSize: '20px',
                        position: 'absolute',
                        right: '20px',
                        top: '20px',
                        color: '#353658',
                        fontWeight: ''
                    }} />

                    <ScannerCard
                        bgColor='#2F32A4'
                        img={heart}
                        content="Healthy Heart"
                        positions={{ top: '80px', right: '-35px' }}
                    />

                    <ScannerCard
                        bgColor="#1ADEED"
                        img='src\\assets\\images\\leg.png'
                        content='Healthy Leg'
                        positions={{ bottom: '95px', left: '-15px' }}
                    />
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
