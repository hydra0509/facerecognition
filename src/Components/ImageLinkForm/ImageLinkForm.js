import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
	<div>
		<p className="f3 fw6">
	 		{'This Application will detect faces on your picture'}
		</p>
		<div className="center">
				<div className="form center pa4 br3 shadow-3">
			<input className='f4 pa2 w-70 br2 center' type='text' onChange= {onInputChange } />
			<button className="w-30  grow f4 link br3 ph3 pv2 dib white bg-blue"
			onClick={onButtonSubmit}>Detect</button>
				</div>
		</div>
	</div>
	);
}



export default ImageLinkForm;