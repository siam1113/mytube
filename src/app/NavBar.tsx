import React from 'react'

export default function SideBar() {
  return (
    <nav className="navbar bg-light border border-1 shadow-sm" >
    <div className="container">
      <a className="navbar-brand" href="#">
      <img width="35" height="35" src="https://img.icons8.com/arcade/64/video.png" alt="video"/>
        mytube
      </a>
      <ul className="nav nav-pills nav-flush flex-row mb-auto text-left">
      <li className="nav-item">
        <a href="#" className="d-flex nav-link py-3 border-bottom" title="">
        <i className="bi bi-border-all px-2"></i>
        All
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="d-flex nav-link py-3 border-bottom" title="">
        <i className="bi bi-collection-play px-2"></i>
        Channels
        </a>
      </li>
      <li>
        <a href="#" className="d-flex nav-link py-3 border-bottom" title="">
        <i className="bi bi-collection-play px-2"></i>
        Videos
        </a>
      </li>
      <li>
        <a href="#" className="d-flex nav-link py-3 border-bottom" title="">
          <i className="bi bi-collection-play px-2"></i>
          Shorts
        </a>
      </li>
      <li>
        <a href="#" className="d-flex nav-link py-3 border-bottom" title="">
        <i className="bi bi-collection-play px-2"></i>
        Playlists
        </a>
      </li>
    </ul>
    </div>
  </nav>
  )
}