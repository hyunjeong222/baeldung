import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
  return (
    <>
      <ul>
        <Link to="/"><li style={{float: 'left', marginRight: '10px'}}>logo</li></Link> 
				<Link to="/login"><li style={{float: 'left', marginRight: '10px'}}>login</li></Link>
        <Link to="/join"><li>join</li></Link>
			</ul>
    </>
  );
}

export default header;