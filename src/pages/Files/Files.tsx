import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { useAuth } from "../../hooks/useAuth";
import { getUserInfo } from "../../redux/operations";
import { Folders } from "../../components/Folders/Folders";
import { Title } from "../../components/Title/Title";
import { SkeletonLoaderFolders } from "../../components/SkeletonLoaderFolders/SkeletonFolders";
import { ButtonCreateFolder } from "../../components/ButtonCreateFolder/ButtonCreateFolder";
import { CreateFolderModal } from "../../components/CreateFolderModal/CreateFolderModal";

export const Files: FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { isAuth, folders, isLoad } = useAuth();

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!isAuth) return;

		dispatch(getUserInfo());

		if(isModalOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		}

	}, [dispatch, isAuth, isModalOpen]);

	return (
		<>
			<Title title="Files" />

			{
				isLoad
					? <SkeletonLoaderFolders />
					: folders.length > 0 && <Folders folders={folders} />
			}

			<CreateFolderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

			<ButtonCreateFolder setIsModalOpen={setIsModalOpen} />
		</>
	)
}
