import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import Meme from './Meme.png'

const Logo = () => {
	return (
		<div className="ma4 mt0">
		<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ width: 120 }} >
			<div className="Tilt-inner pa2">
				<img src={Meme} alt="Meme"/>
			</div>
		</Tilt>
		</div>
	);
}

export default Logo;