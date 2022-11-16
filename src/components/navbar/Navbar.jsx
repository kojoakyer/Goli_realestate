import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu () {
        setClick(false)
    }

  

  return (
    <>
  
    <div className='navbar' >
    
        <div className="left">
            <div className="nav-logo">
                <Link to='/'>
                <img className='photo' src="assets/GOLI_LOGO.png" alt="" />
                </Link>
            </div>
        </div>
        <div className="right">
        <div className="menu-icon" onClick={handleClick}>
          {click ? <CloseIcon/>:<MenuIcon/>}
            {/* <i className={click ? 'fas fa-times': 'fas fa-bars'}></i> */}
        </div>
        <div className="nav-menu-main">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <div className="nav-item-1">
              <Link className='nav-links' style={{textDecoration:'none'}}  to='' >
                About Us
              </Link>
              <KeyboardArrowDownIcon/>
            </div>
            <ul className="sub-menu">
             <li  onClick={closeMobileMenu}   ClassName="nav-item">
               <Link className='sub_nav-links' to='/about-us'>Who We Are</Link>
             </li>
             <li  onClick={closeMobileMenu}   ClassName="nav-item">
               <Link className='sub_nav-links' to='/chairmans-message'>Chairmans Message</Link>
             </li>
            </ul>
          </li>
          <li  onClick={closeMobileMenu}  className="nav-item">
          <Link className='nav-links'  style={{textDecoration:'none'}}  to='/gallery' >
            Gallery
          </Link>
          </li>
          <li className="nav-item">
            <div className="nav-item-1">
              <Link className='nav-links'  style={{textDecoration:'none'}}  to='' >
              News & Insight
              </Link>
              <KeyboardArrowDownIcon/>
            </div>
          <ul className="sub-menu">
            <li  onClick={closeMobileMenu}   ClassName="nav-item">
              <Link className='sub_nav-links' to='/faqs'>Faqs</Link>
            </li>
           </ul>
          </li>
          <li   onClick={closeMobileMenu}  className="nav-item">
          <Link className='nav-links'  style={{textDecoration:'none'}}  to='/what-we-do'>
            What We Do
          </Link>
          </li>
          <li  onClick={closeMobileMenu}  className="nav-item">
            <Link className='nav-links'  style={{textDecoration:'none'}}  to='/contact-us' >
              Contact Us
            </Link>
          </li>
          </ul>
          </div>
        </div>
       
    </div> 
    {/* <Divider sx={{display:{sx:'block',sm:'block',md:'none'}}}/> */}
    </>
  )
}

export default Navbar
