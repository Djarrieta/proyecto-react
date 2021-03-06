import { AlertModel } from "../../App/models/AlertModel";
import { CurrentTeamModel } from "../../Teams/models/CurrentTeamModel";
import { CurrentUserModel } from "./CurrentUserModel";

export interface ResponseUserModel {
	alert: AlertModel;
	currentUser?: CurrentUserModel;
	currentTeam?: CurrentTeamModel;
}
