import { useNavigate } from 'react-router-dom';
import CreateService from '../services/CreateService';
import { useEffect } from 'react';
import { validateUser } from '../features/auth/validateUser';

const UserService = CreateService("users");

export function useUsers(state, dispatch, id = null) {
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, [])

    useEffect(() => {
        if (id)
        {
            UserService.getById(id)
                       .then(res => { dispatch({ type: "UPDATE_USER", payload: res.data }) });
        }
    }, [id, dispatch]);

    const getAllUsers = async() => {
        try {
            const res = await UserService.getAll();
            dispatch({ type: "GET_USERS", payload: res.data });
        }
        catch (err) {

        }
    };

    const checkForm = async() => {
        const errors = validateUser(state.user);

        if (Object.keys(errors).length > 0) {
            dispatch({ type: "SET_ERRORS", payload: errors });
        }
        else 
        {
            try {
                const userToSave = {
                    accountName: state.user.accountName,
                    accountEmail: state.user.accountEmail,
                    accountRole: state.user.accountRole,
                    accountPassword: state.user.accountPassword
                };

                if (id) {
                    await UserService.update(id, userToSave);
                }
                else {
                    const res = await UserService.add(userToSave);

                    dispatch({ type: "ADD_USER", payload: res.data})
                }
            }
            catch (err) {

            }
        }
    }

    const handleFieldChange = (field, value) => {
        dispatch({ type: "FIELD_CHANGE", field, value });
    }

    const deleteUser = async(id) => {
        if (window.confirm("Are you sure you want to delete this user?"))
            try {
                await UserService.remove(id);

                dispatch({ type: "DELETE_USER", payload: { accountId: id } });
            }
            catch (err) {

            }
    }

    return {
        checkForm,
        handleFieldChange,
        deleteUser,
        users: state.users,
        user: state.user,
        errors: state.errors
    }
}