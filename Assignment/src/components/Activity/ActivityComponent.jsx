import React from 'react'
import '../style/Activity.css'

function ActivityComponent() {
    const data = [
        { day: 'Mon', bars: [40, 30, 50] },
        { day: 'Tues', bars: [50, 45, 30] },
        { day: 'Wed', bars: [35, 25, 45] },
        { day: 'Thurs', bars: [45, 30, 40] },
        { day: 'Fri', bars: [55, 40, 50] },
        { day: 'Sat', bars: [30, 20, 35] },
        { day: 'Sun', bars: [40, 30, 25] }
    ];
    const barColors = ['bar1', 'bar2', 'bar3'];

    return (
        <div className="chart-container">
            <div className="header">
                <div>Activity</div>
                <div className="appointments">3 appointment on this week</div>
            </div>
            <div className="bar-chart">
                {data.map((item, idx) => (
                    <div className="day" key={idx}>
                        <div className="bars">
                            {item.bars.map((height, i) => (
                                <div
                                    key={i}
                                    className={`bar ${barColors[i]}`}
                                    style={{ height: `${height}px` }}
                                ></div>
                            ))}
                        </div>
                        <div className="label">{item.day}</div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ActivityComponent