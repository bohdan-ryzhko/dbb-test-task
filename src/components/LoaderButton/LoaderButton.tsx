import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";

export const LoaderButton: FC = () => (
	<RotatingLines
		strokeColor="#fff"
		strokeWidth="3"
		animationDuration="1"
		width="20"
		visible={true}
	/>
);
