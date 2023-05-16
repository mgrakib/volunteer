/** @format */

import React, { useContext, useEffect, useState } from "react";
import { AuthContextAPI } from "../../../Provider/AuthProvider";
import SingleEventCard from "./SingleEventCard";

const AllEvents = () => {
	const [allEvent, setAllEvemtn] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/all-event")
			.then(res => res.json())
			.then(data => {
				setAllEvemtn(data);
			});
	}, []);
	
	return (
		<div className='my-[74px]'>
			<h1 className='text-center text-[36px] font-bold'>
				I grow by helping people in need.
			</h1>

			<div className='text-center my-[26px]'>
				<span className='h-[50px]  inline-block rounded-md overflow-hidden mx-auto'>
					<input
						type='text'
						className='border outline-none h-full px-3  w-[400px]'
						placeholder='Search'
						name='search'
					/>
					<button className='w-[118px] bg-[#3F90FC] h-full text-white'>
						Search
					</button>
				</span>
				<div className='grid md:grid-cols-4 gap-5 mt-5'>
					{allEvent.map(event => (
						<SingleEventCard
							key={event._id}
							event={event}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllEvents;
