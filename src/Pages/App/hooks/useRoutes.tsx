import { useContext } from "react";
import { Context } from "../../../GlobalComponents/ContextProvider";
import Home from "../../Home/views/Home";
import TaskDetail from "../../Tasks/views/TaskDetail";
import Tasks from "../../Tasks/views/Tasks";
import NewMember from "../../Teams/views/NewMember";
import NewTeam from "../../Teams/views/NewTeam";
import TeamDetail from "../../Teams/views/TeamDetail";
import Profile from "../../Users/views/Profile";
import SignIn from "../../Users/views/SignIn";
import SignUp from "../../Users/views/SignUp";
import UpdatePassword from "../../Users/views/UpdatePassword";


interface routeModel {
	path: string;
	condition: boolean;
	redirect: string;
	component: () => JSX.Element;
}

const useRoutes = () => {
	const { currentUser } = useContext(Context);

	const userRoutes: routeModel[] = [
		{
			path: "/",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: Home,
		},
		{
			path: "/ingreso",
			condition: currentUser === undefined,
			redirect: "/",
			component: SignIn,
		},
		{
			path: "/registro",
			condition: currentUser === undefined,
			redirect: "/",
			component: SignUp,
		},
		{
			path: "/perfil/:uid",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: Profile,
		},

		{
			path: "/cambiar-contraseña",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: UpdatePassword,
		},
	];

	const teamRoutes: routeModel[] = [
		{
			path: "/equipo-nuevo",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: NewTeam,
		},
		{
			path: "/equipo/:teamId",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: TeamDetail,
		},
		{
			path: "/:teamId/nuevo-miembro",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: NewMember,
		},
		{
			path: "/:teamId/tareas",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: Tasks,
		},
		{
			path: "/:teamId/tarea/:taskId",
			condition: currentUser !== undefined,
			redirect: "/ingreso",
			component: TaskDetail,
		},
	];
	const routes = [...userRoutes, ...teamRoutes];
	return { routes };
};
export default useRoutes;
