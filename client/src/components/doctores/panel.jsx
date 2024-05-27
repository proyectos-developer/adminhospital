import React from 'react'

import { Outlet } from 'react-router-dom'

export default function DoctoresPanel({proporcional}) {
  
    return (
        <div className='overflow-auto' styel={{width: '100%', height: '100%'}}>
            <Outlet/>
        </div>
    )
}
