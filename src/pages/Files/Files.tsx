import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { useAuth } from "../../hooks/useAuth";
import { getUserInfo } from "../../redux/operations";
import { Title } from "../../components/Title/Title";
import { ButtonCreateFolder } from "../../components/ButtonCreateFolder/ButtonCreateFolder";
import { CreateFolderModal } from "../../components/CreateFolderModal/CreateFolderModal";
import { RenderList } from "../../components/RenderList/RenderList";
import { useLocation, useNavigate } from "react-router-dom";
import { convertQueryStringToObject } from "../../utils/convertQueryStringToObject";
import { toast } from "react-toastify";

export const Files: FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { isAuth, folders, isLoad } = useAuth();
	const { search } = useLocation();
	const { create, newFolder } = convertQueryStringToObject(search);
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isAuth) {
			dispatch(getUserInfo());
		}

		if (create) {
			toast.success(`${newFolder} added`);
			navigate({ search: "" });
			return;
		}

	}, [dispatch, isAuth, create]);

	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		}

	}, [isModalOpen]);

	return (
		<>
			<Title title="Files" />

			<RenderList isLoad={isLoad} folders={folders} />

			<CreateFolderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

			<ButtonCreateFolder setIsModalOpen={setIsModalOpen} />
		</>
	)
}
