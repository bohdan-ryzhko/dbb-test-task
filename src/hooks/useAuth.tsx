import { useSelector } from "react-redux";
import {
	selectEmail,
	selectFolders,
	selectIsAuth,
	selectIsLoad,
	selectIsLoadAuthButton,
	selectName
} from "../redux/selectors";

export const useAuth = () => ({
	isAuth: useSelector(selectIsAuth),
	folders: useSelector(selectFolders),
	name: useSelector(selectName),
	isLoad: useSelector(selectIsLoad),
	email: useSelector(selectEmail),
	isLoadAuthButton: useSelector(selectIsLoadAuthButton)
});
