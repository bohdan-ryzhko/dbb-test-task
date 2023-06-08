import sass from "./SkeletonLoaderFolders.module.scss";
import { FC } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";

export const SkeletonLoaderFolders: FC = () => (
	<ul className={sass.skeletonList}>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className={sass.loaderItem}>
			<SkeletonLoader block width={75} height={75} />
			<SkeletonLoader block width={85} height={15} />
		</li>
	</ul>
);
