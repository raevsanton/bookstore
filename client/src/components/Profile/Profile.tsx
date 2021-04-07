import React from "react";
import { useForm } from "react-hook-form";
import { changeName } from "../../store/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { ProfileFormProps } from "./ProfileTypes";
import { AppStateType } from "../../store/reducers";

const Profile: React.FC<ProfileFormProps> = ({ 
    firstName, 
    lastName
}) => {
    const { register, handleSubmit } = useForm<ProfileFormProps>();
    const dispatch = useDispatch();
    let darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
    const onSubmit = (data: ProfileFormProps) => dispatch(changeName(data.firstName, data.lastName));
    return (
        <>
            <h1 className="main__title">Edit profile</h1>
            <h2>Change name</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                    className={`${darkMode && "dark-input"}`}
                    type="text"
                    name="firstName"
                    defaultValue={firstName}
                    ref={register}
                    required
                />
                <label>Last Name</label>
                <input
                    className={`${darkMode && "dark-input"}`}
                    type="text"
                    name="lastName"
                    defaultValue={lastName}
                    ref={register}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default Profile;