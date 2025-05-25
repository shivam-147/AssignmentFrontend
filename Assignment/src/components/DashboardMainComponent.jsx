import React from 'react'
import DashboardOverview from './DashboardOverview'
import CalendarOverview from './CalendarOverview'

function DashboardMainComponent() {
    return (
        <div className='dashboard-main-component'>
            <DashboardOverview />
            <CalendarOverview />
        </div>
    )
}

export default DashboardMainComponent