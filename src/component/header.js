import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
  return (
    <>
      <ul>
				<Link to="/login"><li style={{float: 'left', marginRight: '10px'}}>login</li></Link>
        <Link to="/"><li>main</li></Link>
			</ul>
    </>
  );
}

export default header;