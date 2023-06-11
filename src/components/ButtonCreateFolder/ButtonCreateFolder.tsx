import sass from "./ButtonCreateFolder.module.scss";
import { ButtonCreateFolderProps } from "../../interfaces/ButtonCreateFolderProps";
import { FC } from "react";

export const ButtonCreateFolder: FC<ButtonCreateFolderProps> = ({ setIsModalOpen }) => (
	<button onClick={() => setIsModalOpen(true)} className={sass.buttonCreateFolder}></button>
)
