import React from 'react';
import'./Header.css';

const Header=({headTitle , headerExpanded})=>{
	return(
		<div className="head-container">
			<h1 className="head-text">{headTitle}</h1>
            <h3 className='head-text'>Find a Perfect domain Just for you </h3>
		</div>
	);
};
export default Header;
