import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { useAuth } from "../../hooks/useAuth";
import { getUserInfo } from "../../redux/operations";
import { Folders } from "../../components/Folders/Folders";

export const Files: FC = () => {
	const { isAuth, folders } = useAuth();
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (!isAuth) return;
		dispatch(getUserInfo());
	}, [dispatch, isAuth]);

	return (
		<>
			<h2>Files</h2>
			{
				folders.length > 0 &&
				<Folders folders={folders} />
			}
		</>
	)
}
