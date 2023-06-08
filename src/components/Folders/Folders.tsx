import sass from "./Folders.module.scss";
import { FC } from "react";
import { IFolders } from "../../interfaces/IFolders";

interface FoldersProps {
	folders: IFolders[],
}

export const Folders: FC<FoldersProps> = ({ folders }) => {
	return (
		<ul className={sass.folderList}>
			{
				folders.map((folder: IFolders) =>
					<li
						key={folder.id}
						className={sass.folderItem}
					>
						<img width="75" height="75" src="https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png" alt="folder-invoices--v1"/>
						<p className={sass.folderName}>{folder.name}</p>
					</li>
				)
			}
		</ul>
	)
}
