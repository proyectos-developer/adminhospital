import React from 'react'

import {Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent} from '@syncfusion/ej2-react-schedule'

export default function AgendaDoctores({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ScheduleComponent 
                currentView='Month'
                selectedDate={new Date()}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    )
}
