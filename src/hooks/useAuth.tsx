import { useSelector } from "react-redux";
import { selectFolders, selectIsAuth, selectName } from "../redux/selectors";


export const useAuth = () => ({
	isAuth: useSelector(selectIsAuth),
	folders: useSelector(selectFolders),
	name: useSelector(selectName),
});
