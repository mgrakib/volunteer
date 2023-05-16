
import { FaTrashAlt } from 'react-icons/fa';

const VolunteerRegisterList = () => {
    return (
		<div className=' md:px-8  md:h-[calc(100vh-20px)]'>
			<h2 className='text-[22px] font-bold'>Volunteer register list</h2>

			<div className='bg-[#F4F7FC] p-2 md:p-5 mt-6 h-full'>
				<div className='bg-[#FFFFFF] p-4 rounded-md'>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							{/* head */}
							<thead>
								<tr>
									<th>Name</th>
									<th>Email ID</th>
									<th>Registating date</th>
									<th>Volunteer list</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<th>Sufi Ahmed Hamim</th>
									<td>sufi@gmail.com</td>
									<td>22-10-2020</td>
									<td>Organize books at the library.</td>
									<td>
										<div className='bg-[#FF444A] w-[30px] h-[30px] flex items-center justify-center text-white rounded-md cursor-pointer'>
											<FaTrashAlt />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VolunteerRegisterList;