import '../style/CalendarCard.css'

function CalendarCard({
    day,
    date,
    times,
    apt,
}
) {
    return (
        <div>
            <p>{day}</p>
            <h3>{date}</h3>
            {
                times.map((time, index) => (
                    <p key={index} style={{ color: time == apt ? 'red' : '' }}>{time}</p>
                ))
            }
        </div>
    )
}

export default CalendarCard;