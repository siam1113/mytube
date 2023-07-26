'use client'

import React, { useState } from 'react'
import AddLink from './AddLink'

function AppBar() {
  let [showAddLinkForm, setShowAddLinkForm] = useState(false);
  
  return (
    <div>
      <ul className="nav nav-pills w-50 d-flex flex-row justify-content-center align-items-center mb-auto text-left mt-3">
          <li className="nav-item mx-1">
            <a href="#" className="d-flex nav-link py-2 border-bottom" title="">
            <i className="bi bi-border-all px-2"></i>
            All
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="d-flex nav-link py-2 border-bottom" title="">
            <i className="bi bi-collection-play px-2"></i>
            Channels
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="d-flex nav-link py-2 border-bottom" title="">
            <i className="bi bi-collection-play px-2"></i>
            Videos
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="d-flex nav-link py-2 border-bottom" title="">
              <i className="bi bi-collection-play px-2"></i>
              Shorts
            </a>
          </li>
          <li className="nav-item mx-1">
            <a href="#" className="d-flex nav-link py-2 border-bottom" title="">
            <i className="bi bi-collection-play px-2"></i>
            Playlists
            </a>
          </li>
          <li className="ms-4 ps-4">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </li>
          <li className="nav-item mx-1 fs-5 border rounded">
            <a href="#">
              <i className="bi bi-filter px-2"></i>
            </a>
          </li>
          <li className="nav-item mx-1 fs-5 border rounded" onClick={() => setShowAddLinkForm(!showAddLinkForm)}>
            <a href="#">
            <i className="bi bi-node-plus px-2 text-primary"></i>
            </a>
          </li>
      </ul>
      {
        showAddLinkForm && <AddLink />
      }
    </div>
  )
}

export default AppBar