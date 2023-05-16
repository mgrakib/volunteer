
import { Outlet } from 'react-router-dom';

import AdminNavBar from '../../components/AdminComponents/AdminNavBar/AdminNavBar';

const Admin = () => {
    return (
		<div className='grid md:grid-cols-[2fr_7fr] h-[calc(100vh- 30px)] '>
			<AdminNavBar />
			<div className='h-[calc(100vh- 30px)] overflow-y-scroll '>
				<Outlet />
			</div>
		</div>
	);
};

export default Admin;