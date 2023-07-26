'use client'

import React from 'react'

function AddLink() {
  return (
    <div className='d-flex justify-content-center p-3'>
      <form className='bg-light p-4 rounded border border-primary-subtle'>
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="link" placeholder="Paste your link here..."/>
          <label htmlFor="floatingInput">Link</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Link</button>
      </form>
    </div>
  )
}

export default AddLink