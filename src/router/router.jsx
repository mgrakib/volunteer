/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../components/Home/Home/Home";
import Admin from "../Layout/Admin/Admin";
import VolunteerRegisterList from "../components/AdminComponents/VolunteerRegisterList/VolunteerRegisterList";
import AddEvent from "../components/AdminComponents/AddEvent/AddEvent";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/admin",
		element: <Admin />,
		children: [
			{
				path: "/admin",
				element: <VolunteerRegisterList />,
			},
			{
                path: "/admin/add-event",
                element: <AddEvent />
			},
		],
	},
]);

export default router;