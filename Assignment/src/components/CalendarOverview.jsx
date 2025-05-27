import React from 'react'
import CalendarCard from './Cards/CalendarCard'
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import tooth from '../assets/images/tooth.png'
import muscle from '../assets/images/muscle.png'
import AppointmentCard from './Cards/ApointmentCard'
import syringe from '../assets/images/syringe.png'
import eye from '../assets/images/eye.png'
import doctor from '../assets/images/doctor.png'
import heart from '../assets/images/heart.png'
import ScheduleCard from './Cards/ScheduleCard'

function CalendarOverview() {

    const arr = [
        { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'], apt: '', bgcolor: '' },
        { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'], apt: '09:00', bgcolor: '#3734A9' },
        { day: 'Wed', date: 27, times: ['12:00', '', '13:00'], apt: '', bgcolor: '' },
        { day: 'Thurs', date: 28, times: ['10:10', '11:00', ''], apt: '11:00', bgcolor: '#A1A8D3' },
        { day: 'Fri', date: 29, times: ['', '14:00', '16:00'], apt: '', bgcolor: '' },
        { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], apt: '12:00', bgcolor: '#A1A8D3' },
        { day: 'Sun', date: 31, times: ['09:00', '10:00', '10:00'], apt: '09:00', bgcolor: '#A1A8D3' }

    ]

    const appointments = [
        { type: 'Dentist', img: tooth, time: '09:00-11:00', doctorName: 'Dr. Cameron Williamson', bgColor: '#3734A9', color: '#fff' },
        { type: 'Physiotherapy Appointment', img: muscle, time: '11:00-12:00', doctorName: 'Dr. Kevin Djones', bgColor: '#D8DEF7', color: '#3734A9' }
    ]

    const thursday = [
        { content: 'Health checkup complete', img: syringe, time: '10:00 AM' },
        { content: 'Ophthalmologist', img: eye, time: '14:00 PM' },
    ]
    const saturday = [
        { content: 'Cardiologist', img: heart, time: '12:00 AM' },
        { content: 'Neurologist', img: doctor, time: '16:00 PM' }
    ]


    return (
        <div className='calendar-overview'>


            <div className="cal-header" style={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#3734A9'

            }}>
                <h2>October 2021</h2>
                <div>
                    <span>
                        <BiSolidLeftArrowAlt />
                    </span>
                    <span>
                        <BiSolidRightArrowAlt />
                    </span>
                </div>
            </div>


            <div className="cal-card" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {
                    arr.map((obj, index) => (
                        <CalendarCard key={index}
                            day={obj.day}
                            date={obj.date}
                            times={obj.times}
                            apt={obj.apt}
                            bgcolor={obj.bgcolor}
                        />
                    ))
                }
            </div>


            <div className="appointment-card"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop: '10px'
                }}
            >

                {
                    appointments.map((apt, idx) => (
                        <AppointmentCard key={idx}
                            type={apt.type}
                            img={apt.img}
                            time={apt.time}
                            doctorName={apt.doctorName}
                            bgColor={apt.bgColor}
                            color={apt.color}
                        />
                    ))
                }

            </div>
            <h2 style={{
                color: '#28244D',
                fontSize: '20px'
            }} >The Upcoming Schedules</h2>

            {/* Thursday */}
            <div>
                <span style={{ color: '#353658' }}>On Thurday</span>
                <div style={{
                    display: 'flex'

                }}>
                    {
                        thursday.map((ele, idx) => (
                            <ScheduleCard
                                type={ele.content}
                                img={ele.img}
                                time={ele.time}
                            />
                        ))
                    }
                </div>
            </div>

            {/* Saturday */}
            <div>
                <span style={{ color: '#353658' }}>On Saturday</span>

                <div style={{
                    display: 'flex'

                }}>
                    {
                        saturday.map((ele, idx) => (
                            <ScheduleCard
                                type={ele.content}
                                img={ele.img}
                                time={ele.time}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default CalendarOverview