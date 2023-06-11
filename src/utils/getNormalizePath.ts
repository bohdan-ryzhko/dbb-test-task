export const getNormalizePath = (path: string) => {
	const normalizedPath = path.replace(/\/+/g, '/');
	return normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
};
