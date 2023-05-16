import { useState } from 'react';
import logo from '../../../assets/logos/Group 1329.png'
import { FaBars,  FaPlus, FaTimes, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
		<div
			className={`flex md:flex-col items-center md:h-[calc(100vh-20px)] `}
		>
			<Link to={'/'}>
				<div className='w-[180px]'>
					<img
						src={logo}
						alt=''
					/>
				</div>
			</Link>
			<div className='md:hidden ml-auto text-[20px]'>
				{!showMenu ? (
					<FaBars onClick={() => setShowMenu(!showMenu)} />
				) : (
					<FaTimes onClick={() => setShowMenu(!showMenu)} />
				)}
			</div>
			<div className='hidden md:block md:py-[49px]'>
				<div>
					<Link className=' inline-block'>
						<p className='flex items-center gap-1 text-[#207FEE]'>
							<FaUsers /> Volunteer register list
						</p>
					</Link>
				</div>

				<div className='mt-[30px]'>
					<Link
						to={"/admin/add-event"}
						className=' inline-block'
					>
						<span className='flex items-center gap-1 text-[#000] '>
							<FaPlus /> Add event
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AdminNavBar;