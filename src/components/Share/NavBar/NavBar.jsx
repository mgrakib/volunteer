import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/Group 1329.png'

const NavBar = () => {
    return (
		<div className='flex items-center justify-between'>
			<Link>
				<div className='w-[200px]'>
					<img
						src={logo}
						alt=''
					/>
				</div>
			</Link>

			<div>
				<ul className='flex items-center gap-10'>
					<li>
						<Link>Home</Link>{" "}
					</li>
					<li>
						<Link>Donation</Link>{" "}
					</li>
					<li>
						<Link>Events</Link>{" "}
					</li>
					<li>
						<Link>Blog</Link>{" "}
					</li>

					<li>
						<button className='bg-[#3F90FC] py-3 px-5 rounded-md text-white mr-4'>
							Register
						</button>
						<Link to={"/admin"}>
							<button className='bg-[#434141] py-3 px-5 rounded-md text-white'>
								Admin
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;