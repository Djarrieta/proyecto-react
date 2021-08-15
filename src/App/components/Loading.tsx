import React from "react";
import { useContext } from "react";
import IconLogo from "../../GlobalComponents/icons/IconLogo";
import { Context } from "./ContextProvider";

const Loading = () => {
	const { loading } = useContext(Context);
	if (loading) {
		return (
			<div className="absolute z-50 flex items-center justify-center w-screen h-screen opacity-75 bg-bgd_light">
				<div className="duration-75 h-1/4 animate-ping">
					<IconLogo />
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};
export default Loading;
