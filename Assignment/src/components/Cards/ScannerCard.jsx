import React from 'react'
import scanner from '../../assets/images/scanner.png'


function ScannerCard({ content, img, positions, bgColor }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: content === 'Healthy Leg' ? 'row-reverse' : '',
            alignItems: 'center',
            position: 'absolute',
            ...positions,
        }}>
            <img src={scanner} alt='scanner img'
                style={{
                    width: '40px',
                    height: '40px'
                }}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: bgColor,
                padding: '5px',
                borderRadius: '8px',
                color: '#ddd'
            }}
            >
                <img src={img} alt=""
                    style={{
                        width: '20px',
                        height: '20px'
                    }} />
                <span
                    style={{
                        fontWeight: 550
                    }}
                >{content}</span>
            </div>
        </div>
    )
}

export default ScannerCard