import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { useAuth } from "../../hooks/useAuth";
import { getUserInfo } from "../../redux/operations";
import { Folders } from "../../components/Folders/Folders";
import { Title } from "../../components/Title/Title";
import { SkeletonLoaderFolders } from "../../components/SkeletonLoaderFolders/SkeletonFolders";

export const Files: FC = () => {
	const { isAuth, folders, isLoad } = useAuth();
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (!isAuth) return;
		dispatch(getUserInfo());
	}, [dispatch, isAuth]);

	return (
		<>
			<Title title="Files" />

			{
				isLoad
					? <SkeletonLoaderFolders />
					: folders.length > 0 && <Folders folders={folders} />
			}
		</>
	)
}
