import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { FC, ReactElement } from "react";

interface PrivateRouteProps {
	component: ReactElement;
	redirectTo?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, redirectTo = "/" }) => {
	const { isAuth } = useAuth();

	return !isAuth ? <Navigate to={redirectTo} /> : Component;
};
