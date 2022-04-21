import './navbar.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className="left">
            <a href="#intro" className='logo'>SW</a>
            <div className="itemContainer">
              <a className='clickable' href="mailto: samweller24@gmail.com">
                <EmailIcon className='icon'/>
                <span>samweller24@gmail.com</span>
              </a>
            </div>
            <div className="itemContainer">
              <a className="clickable" href="https://www.linkedin.com/in/samuelweller2000/">
                <LinkedInIcon className='icon' />
                <span >samweller2000</span>
              </a>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
