import '../style/CalendarCard.css'

function CalendarCard({
    day,
    date,
    times,
    apt,
    bgcolor = '#3734A9'
}
) {
    return (
        <div
            className="cal-card-container"
            style={{
                color: day === 'Sun' ? '#e8dada' : '',
                backgroundColor: day === 'Tues' ? '#D8DEF7' : ''
            }}
        >
            <p style={{ fontSize: '18px' }}>{day}</p>
            <h3>{date}</h3>
            {times.map((time, index) => (
                <p
                    key={index}
                    style={
                        apt === time
                            ? {
                                backgroundColor: bgcolor,
                                padding: '0 5px',
                                borderRadius: '5px',
                                color: '#fff'
                            }
                            : {}
                    }
                >
                    {time !== '' ? time : '---'}
                </p>
            ))}
        </div>
    );
}

export default CalendarCard;