export const validateLogin = (user, accounts) => {
    const errors = {};

    if (!user.username || user.username.trim() === "") errors.username = "Username is required";
    if (!user.password || user.password.trim() === "") errors.password = "Password is required";
    else {
        const foundUser = accounts.find(acc => 
        acc.username === user.username &&
        acc.password === user.password
        );

        if (!foundUser) errors.password = "Wrong credentials";
    }


    return errors;
}

export default validateLogin;