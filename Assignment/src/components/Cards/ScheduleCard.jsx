import React from 'react'
import '../../index.css'

function ApointmentCard({ type, img, time }) {
    return (
        <div
            style={{
                background: '#D8DEF7',
                color: '#3734A9',
                padding: '15px',
                borderRadius: '15px',
                minWidth: '200px',
                margin: '10px',
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
        </div>
    );
}

export default ApointmentCard