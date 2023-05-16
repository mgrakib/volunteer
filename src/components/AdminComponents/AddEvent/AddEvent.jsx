import React from 'react';
import { FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddEvent = () => {
	const handelAddEvent = e => {
		e.preventDefault();
		const form = e.target;
		const title = form.title.value;
		const date = form.date.value;
		const description = form.description.value;
		const image = form.image.value;
		
		const eventInfo = {
			title,
			date,
			description,
			image,
		};
		
		fetch("http://localhost:5000/add-event", {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(eventInfo)
		}).then(res => res.json()).then(data => {
			console.log(data)
			if (data.acknowledged) {
				Swal.fire({
					icon: "success",
					title: "Added",
					text: "Successfully Add An Event",
					footer: '<a href="">Why do I have this issue?</a>',
				});
				form.reset();
			}
		})
	}

    return (
		<div className=' md:px-8  md:h-[calc(100vh-20px)]  overflow-hidden'>
			<h2 className='text-[22px] font-bold'>Add event</h2>

			<div className='bg-[#F4F7FC] p-2 md:p-5 mt-6 h-full'>
				<form onSubmit={handelAddEvent}>
					<div className='bg-[#FFFFFF] p-4 rounded-md'>
						<div className='grid md:grid-cols-2 gap-10'>
							<div>
								<label className='label'>
									<span className='label-text'>
										Event Title
									</span>
								</label>
								<input
									type='text'
									placeholder='Enter title'
									className='input input-bordered w-full'
									name='title'
								/>
							</div>
							<div>
								<label className='label'>
									<span className='label-text'>
										Event Date
									</span>
								</label>
								<input
									type='date'
									placeholder='Enter title'
									className='input input-bordered w-full'
									name='date'
								/>
							</div>
							<div>
								<label className='label'>
									<span className='label-text'>
										Description
									</span>
								</label>

								<textarea
									name='description'
									id=''
									placeholder='Enter Description'
									className='input input-bordered w-full h-[120px]'
								></textarea>
							</div>
							<div>
								<label className='label'>
									<span className='label-text'>Banner</span>
								</label>
								<button className='flex items-center bg-[#E5F3FF] border border-[#0084FF] w-[170px] h-[40px] justify-center gap-3 rounded-md'>
									<FaCloudUploadAlt /> Upload image
								</button>
							</div>
							<div>
								<label className='label'>
									<span className='label-text'>
										Image Link
									</span>
								</label>
								<input
									type='text'
									placeholder='Image Link'
									className='input input-bordered w-full'
									name='image'
								/>
							</div>
						</div>
					</div>

					<div className='text-center md:text-right'>
						<button className='bg-[#0084FF] w-[108px] h-[37px] text-white rounded-md  mt-2'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddEvent;