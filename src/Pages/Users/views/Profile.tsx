import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../App/components/ContextProvider";
import Button from "../../../GlobalComponents/Button";
import FieldText from "../../../GlobalComponents/FieldText";
import IconMore from "../../../GlobalComponents/icons/IconMore";
import IconTeam from "../../../GlobalComponents/icons/IconTeam";
import IconUser from "../../../GlobalComponents/icons/IconUser";
import Section from "../../../GlobalComponents/Section";
import Table from "../../../GlobalComponents/Table";
import TableItem from "../../../GlobalComponents/TableItem";
import useProfile from "../hooks/useProfile";

const Profile = () => {
	const { currentUser } = useContext(Context);
	const { data, setData, saveUserData, changePictureURL, signOut,history } =
		useProfile();

	return (
		<>
			<Section name="Perfil">
				<div className="flex flex-col-reverse my-6 sm:flex-row">
					<div className="w-full px-6 pb-2 my-3s sm:w-1/2">
						<FieldText label="ID" value={data.uid} disabled={true} />
						<FieldText
							label="Correo"
							value={data.email}
							onChange={(e) => setData({ ...data, email: e.target.value })}
							disabled={true}
						/>
						<FieldText
							label="Nombre"
							value={data.name}
							onChange={(e) => setData({ ...data, name: e.target.value })}
						/>
						<FieldText
							label="Whatsapp"
							value={data.whatsapp}
							onChange={(e) => {
								console.log(e.type);
								setData({ ...data, whatsapp: e.target.value });
							}}
						/>
						<Button name="Editar" handleFunction={saveUserData} />
						<div className="w-1/2 text-left">
							<Button
								name="Cerrar sesión"
								handleFunction={signOut}
								secondary={true}
							/>
							<Button
								name="Cambiar contraseña"
								handleFunction={() => history.push("/cambiar-contraseña")}
								secondary={true}
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center w-full px-6 pb-2 my-3 sm:w-1/2 max-h-60">
						{data.pictureURL ? (
							<img src={data.pictureURL} alt="profile" />
						) : (
							<IconUser />
						)}
						<Button
							name="Editar foto"
							handleFunction={changePictureURL}
							secondary={true}
						/>
					</div>
				</div>
			</Section>

			<Section
				name="Equipos"
				buttonName="Agregar"
				handleFunction={() => history.push("/equipo-nuevo")}
			>
				<Table>
					{currentUser.teams ? (
						currentUser.teams.map((team) => {
							return (
								<TableItem key={team.teamId}>
									<div className="flex justify-between w-full h-10">
										<IconTeam />
										<span>{team.teamId}</span>
										<span>{team.role}</span>
										<Link to={`/equipo/${team.teamId}`} className="h-full">
											<IconMore />
										</Link>
									</div>
								</TableItem>
							);
						})
					) : (
						<tr className="flex items-center justify-center w-full ">
							<td>
								<span>No tienes ningún equipo. </span>
								<Link to="/equipo/nuevo">Crea tu primer equipo</Link>
							</td>
						</tr>
					)}
				</Table>
			</Section>
		</>
	);
};

export default Profile;
