import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css' 
import face from './facelogo.png';


const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 45 }} style={{ height: 140, width: 150 }} >
 			<div className="Tilt-inner"><img alt='logo' src={face} /> </div>
			</Tilt>
		</div>
		);
}


export default Logo;