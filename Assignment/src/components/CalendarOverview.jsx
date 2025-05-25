import React from 'react'
import CalendarCard from './Cards/CalendarCard'

function CalendarOverview() {

    const arr = ["10:00", "11:00", "12:00"]


    return (
        <div>
            <CalendarCard
                day='mon'
                date={22}
                times={arr}
                apt='11:00'
            />
        </div>
    )
}

export default CalendarOverview