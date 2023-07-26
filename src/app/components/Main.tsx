import React from 'react'
import AppBar from './AppBar'
import LeftSideBar from './LeftSideBar'
import ContentTable from './ContentTable'
import NavBar from './NavBar'

export default function Main() {
  return (
    <div className="container-fluid w-100 d-flex flex-row">
        <LeftSideBar />
      <div className='d-flex flex-column w-75'>
        <AppBar />
        <ContentTable/>
      </div>
    </div>
  )
}
