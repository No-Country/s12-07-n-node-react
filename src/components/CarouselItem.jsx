 
import React from 'react';



function CarouselItem({ poster }) {
	return (
		<div className='carousel-item'>
			<img src={poster} className='h-[136px] w-[106px] rounded-[8px]' />
		</div>
	);
}

export default CarouselItem;
