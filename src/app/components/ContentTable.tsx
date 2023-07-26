import React from 'react'

function ContentTable() {
  return (
    <div>
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
  )
}

export default ContentTable