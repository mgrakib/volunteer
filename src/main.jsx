import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<div className='p-2 md:px-20 mx-auto'>
				<RouterProvider router={router} />
			</div>
		</AuthProvider>
	</React.StrictMode>
);
