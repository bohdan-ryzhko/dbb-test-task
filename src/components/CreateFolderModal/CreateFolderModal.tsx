import sass from "./CreateFolderModal.module.scss";
import { CreateFolderForm } from "../CreateFolderForm/CreateFolderForm";
import { FC, MouseEventHandler } from "react";
import { IoMdClose } from 'react-icons/io';
import { ButtonCreateFolderProps } from "../../interfaces/ButtonCreateFolderProps";
import { Title } from "../Title/Title";

type HandleToggleModal = MouseEventHandler<HTMLElement>;

interface CreateFolderModalProps extends ButtonCreateFolderProps {
	isModalOpen: boolean,
}

export const CreateFolderModal: FC<CreateFolderModalProps> = ({ isModalOpen, setIsModalOpen }) => {
	const handleToggleModal: HandleToggleModal = (event) => {
		const target = event.target as HTMLElement;

		const checkTarget = target.classList.contains(sass.backdrop)
			|| target.classList.contains(sass.closeModal)
			|| target.tagName === "svg"
			|| target.tagName === "path";

		if (checkTarget) {
			setIsModalOpen(false);
		}
	};

	return (
		<>
			{
				isModalOpen &&
				(<div onClick={handleToggleModal} className={sass.backdrop}>
					<div className={sass.modalBody}>
						<button
								onClick={handleToggleModal}
								className={sass.closeModal}>
							<IoMdClose size={20} />
						</button>
						<Title title="Create new folder" />
						<CreateFolderForm />
					</div>
				</div>)
			}
		</>
	)
}
