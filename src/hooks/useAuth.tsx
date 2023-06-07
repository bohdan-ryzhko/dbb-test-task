import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/selectors";


export const useAuth = () => ({
	isAuth: useSelector(selectIsAuth),
});
