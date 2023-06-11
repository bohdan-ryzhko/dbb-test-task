import { FC } from "react";
import { SkeletonLoaderFolders } from "../SkeletonLoaderFolders/SkeletonFolders";
import { Folders } from "../Folders/Folders";
import { IFolders } from "../../interfaces/IFolders";

interface RenderListProps {
	isLoad: boolean,
	folders: IFolders[],
}

export const RenderList: FC<RenderListProps> = ({ isLoad, folders }) => {
	return (
		<>
			{
				isLoad
					? <SkeletonLoaderFolders />
					: folders.length > 0 && <Folders folders={folders} />
			}
		</>
	)
}
