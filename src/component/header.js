import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/global.css';

function header(props) {
  return (
    <div id='wrap'>
      <div className='header-menu'>
        <div className='menu-container'>
          <div className='menu-inner'>
            <ul id='menu' className='nav-menu'>
              <li className='nav-menu-item'>
                <span className='nav-menu-item-icon'></span>
              </li>
              <li className='nav-menu-logo'>
                <Link to="/" className='anchor'><img src="https://www.baeldung.com/wp-content/themes/baeldung/icon/logo.svg"></img></Link>
              </li>
              <li className='nav-menu-list'>
                <Link to="/" className='anchor'>Start Here</Link>
              </li>
              <li className='nav-menu-list'>
                <Link to="/" className='anchor'>Courses </Link>
                <span class="menu-item-normal">▼</span>
                <span class="menu-item-active">▲</span>
              </li>
              <li className='nav-menu-list'>
                <Link to="/" className='anchor'>Guides </Link>
                <span class="menu-item-normal">▼</span>
                <span class="menu-item-active">▲</span>
              </li>
              <li className='nav-menu-list'>
                <Link to="/" className='anchor'>About </Link>
                <span class="menu-item-normal">▼</span>
                <span class="menu-item-active">▲</span>
              </li>
              <li className='nav-menu-list'>
                <Link to="/" className='nav-menu-item-rss'></Link>
              </li>
              <li className='nav-menu-user'>
                <Link to="/" className='nav-menu-item-join'>Join</Link>
                <div className='css-line'></div>
                <Link to="/" className='nav-menu-item-login'>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <ul>
    //     <Link to="/"><li style={{float: 'left', marginRight: '10px'}}>logo</li></Link> 
		// 		<Link to="/login"><li style={{float: 'left', marginRight: '10px'}}>login</li></Link>
    //     <Link to="/join"><li>join</li></Link>
		// 	</ul>
    // </>
  );
}

export default header;