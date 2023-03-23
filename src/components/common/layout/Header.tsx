import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='header-container'>
      <div className='header-container__title-container'>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} className='header-container__title-container__title'><h1 style={{marginTop:0}}>the JINSIDER</h1></Link>
      </div>
      <nav>
        <div className='navbar'>
          <ul>
            <li className='header-container__navbar__link'><Link to="/posts" style={{ color: 'inherit', textDecoration: 'inherit', fontFamily: "Roboto, sans-serif"}}>News</Link></li>
            <li className='header-container__navbar__link'><Link to="/podcasts" style={{ color: 'inherit', textDecoration: 'inherit',fontFamily: "Roboto, sans-serif"}}>Podcast</Link></li>
            <li className='header-container__navbar__link'><Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit', fontFamily: "Roboto, sans-serif"}}>About</Link></li>
            { <div style={{marginLeft:1306}}>
              <a href='https://youtube.com/@ptoreki/' className='header-container__navbar__sm-link'><img src ="/public/images/twitter.svg" alt="Twitter link" width={30}/></a>
              <span style={{marginLeft:12, marginRight:12}}></span>
              <a href='https://twitter.com/PatrickToreki' className='header-container__navbar__sm-link'><img src ="/public/images/twitter.svg" alt="YouTube link" width={30}/></a>
            </div> }
          </ul>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Header;
