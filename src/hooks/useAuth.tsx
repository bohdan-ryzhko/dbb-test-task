import { useSelector } from "react-redux";
import { selectFolders, selectIsAuth } from "../redux/selectors";


export const useAuth = () => ({
	isAuth: useSelector(selectIsAuth),
	folders: useSelector(selectFolders),
});
