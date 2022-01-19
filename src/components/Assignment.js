import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Assignments() {
    return <div>
        <ul>
      <li className='assignment-Link'><Link to='/assignment/counter'>Counter</Link></li>
      <li className='assignment-Link'><Link to='/assignment/random'>Random</Link></li>
      <li className='assignment-Link'><Link to='/assignment/rannumber'>RandomNumber</Link></li>
      <li className='assignment-Link'><Link to='/assignment/userlist'>Userlist</Link></li>
      <li className='assignment-Link'><Link to='/assignment/userremove'>Userremove</Link></li>
  
        </ul>
    </div>
}

export default Assignments
