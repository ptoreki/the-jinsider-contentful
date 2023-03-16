import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/"><h1>The Jinsider</h1></Link>
        <nav>
            <ul>
                <li><Link to="/posts">All</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Header;