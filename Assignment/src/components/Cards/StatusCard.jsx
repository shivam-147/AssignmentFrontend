import React from "react"
import PropTypes from 'prop-types'


function StatusCard({ name, date, icon, value, color = 'green', alt }) {
    return (
        <div>
            <div className="status-card">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <img
                        src={icon}
                        style={{
                            paddingLeft: '5px',
                            width: '28px',
                            height: '28px',
                        }}
                        alt={alt}
                    />
                    <span
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#3734A9',
                        }}
                    >
                        {name}
                    </span>
                </div>

                <div
                    style={{
                        color: '#D8DCDE',
                    }}
                >
                    {date}
                </div>
                <div
                    style={{
                        backgroundColor: 'rgb(153, 160, 172)',
                        width: '100%',
                        height: '10px',
                        borderRadius: '10px',
                        display: 'flex',
                        margin: '5px 0',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: `${value}%`,
                            backgroundColor: color,
                            borderRadius: '10px',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default StatusCard;