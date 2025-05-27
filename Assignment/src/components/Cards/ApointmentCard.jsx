import React from 'react'
import '../../index.css'

function ApointmentCard({ type, img, time, doctorName, bgColor, color }) {
    return (
        <div
            style={{
                background: bgColor,
                color,
                padding: '15px',
                borderRadius: '15px',
                minWidth: '200px',
                margin: '10px 10px 10px 0',
                boxSizing: 'border-box',
            }}
        >
            <div
                className="apt-card-head"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        fontSize: '22px',
                    }}
                >
                    {type}
                </span>
                <img
                    style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '20px',
                    }}
                    src={img}
                    alt={type}
                />
            </div>
            <span>{time}</span>
            <br />
            <span>{doctorName}</span>
        </div>
    )
}

export default ApointmentCard