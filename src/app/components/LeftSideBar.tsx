'use client'

'use client'

import React from 'react'
import { useState } from 'react';

function LeftSideBar() {
  let [collectionForm, setCollectionForm] = useState(false);

  return (
      <div className='container w-25 py-5 px-5'>
        <table className="table">
          <thead>
            <tr className='d-flex flex-row justify-content-between'>
              <th className="d-flex flex-row align-items-center p-0">
                <i className="bi bi-folder fs-4 px-2"></i>
                Collections
              </th>
              <button className='border-0' onClick={()=> setCollectionForm(!collectionForm)}>
                <i className="bi bi-folder-plus fs-5"></i>
              </button>
            </tr>
          </thead>
          <tbody className='px-2 table-group-divider border-secondary' >
            {
              collectionForm && <tr>
              <td>
                <input type='text' className='w-100 rounded input-focus border-1 border-opacity-10 p-2' style={{fontSize: '0.80rem'}} placeholder='Type name and Press ENTER'/>
              </td>
            </tr>
            }
            <tr>
              <td>
                <i className="bi bi-folder2 px-2"></i>
                Programming
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default LeftSideBar