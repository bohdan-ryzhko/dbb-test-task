import sass from "./CreateFolderForm.module.scss";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { getNormalizePath } from "../../utils/getNormalizePath";
import { redirectWindowLocation } from "../../redux/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { ErrorText } from "../ErrorText/ErrorText";
import { LoaderButton } from "../LoaderButton/LoaderButton";

type FormData = {
	folder: string,
}

export const CreateFolderForm: FC = () => {
	const [isLoadSubmit, setIsLoadSubmit] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
	const { email } = useAuth();

	const dispatch: AppDispatch = useDispatch();

	const onSubmit = handleSubmit(({ folder }: FormData) => {
		setIsLoadSubmit(true);
		dispatch(redirectWindowLocation(`redirect-create?inputValue=${getNormalizePath(folder)}&email=${email}`));
	});

	return (
		<form className={sass.form} onSubmit={onSubmit}>
			<label className={sass.folderPath} htmlFor="folder-name">
				<input
					placeholder="/folder-path"
					id="folder-name"
					{...register("folder", { required: true })}
				/>
				{errors.folder && <ErrorText text="Folder name is required field" />}
			</label>
			<button className={sass.submitBtn} type="submit">
				{
					isLoadSubmit ? <LoaderButton /> : "Create folder"
				}
			</button>
		</form>
	)
}
