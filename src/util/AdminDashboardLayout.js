import React from 'react'
import { Header } from '../component/Header'

const AdminDashboardLayout = (props) => {
  return (
    <div className='dark:bg-white dark:text-black'>
        <Header/>
        <div>{props.children}</div>
    </div>
  )
}

export default AdminDashboardLayout