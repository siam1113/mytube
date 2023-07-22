import React from 'react'

export default function Main() {
  return (
    <div className="container-fluid w-100 d-flex flex-row">
      <div className='container w-25 py-5 px-5'>
        <table className="table">
          <thead>
            <tr className='d-flex flex-row justify-content-between'>
              <th className="d-flex flex-row align-items-center p-0">
                <i className="bi bi-folder fs-4 px-2"></i>
                Folders
              </th>
              <button className='border-0'>
                <i className="bi bi-folder-plus fs-5"></i>
              </button>
            </tr>
          </thead>
          <tbody className='px-2 table-group-divider border-secondary' >
            <tr>
              <td>
                <i className="bi bi-folder2 px-2"></i>
                Programming
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex flex-column w-75'>
        <ul className="nav nav-pills d-flex flex-row justify-content-center align-items-center mb-auto text-left mt-3">
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
          <li className="ms-5 ps-5">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </li>
          <li className="nav-item mx-1 fs-5 border rounded">
            <i className="bi bi-filter px-2"></i>
          </li>
        </ul>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='w-25'>
                <div className="ratio ratio-16x9">
                  <iframe src="https://youtube.com/embed/tVVTT9l9lw0" title="YouTube video"></iframe>
                </div>
              </td>
              <td className='w-75'>Using the most basic table markup, </td>
            </tr>
            <tr>
              <td className='w-25'>
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/5XEl2ywlu1I?rel=0" title="YouTube video"></iframe>
                </div>
              </td>
              <td className='w-75'>Using the most basic table markup, </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
