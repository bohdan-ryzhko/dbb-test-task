import { useSelector } from "react-redux";
import { selectFolders, selectIsAuth, selectIsLoad, selectName } from "../redux/selectors";


export const useAuth = () => ({
	isAuth: useSelector(selectIsAuth),
	folders: useSelector(selectFolders),
	name: useSelector(selectName),
	isLoad: useSelector(selectIsLoad),
});
