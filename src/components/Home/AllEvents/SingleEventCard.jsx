import React from 'react';
import { Link } from 'react-router-dom';

const SingleEventCard = ({ event }) => {
    const { title, image } = event;
    return (
		<div className='card card-compact bg-base-100 shadow-xl overflow-hidden'>
			<figure>
				<img
					src={image}
					alt='Shoes'
				/>
			</figure>

			<Link >
				<div className='card-body bg-[#3F90FC]'>
					<h2 className='card-title'>{title}</h2>
				</div>
			</Link>
		</div>
	);
};

export default SingleEventCard;