export const validateLogin = (user, accounts) => {
    const foundUser = accounts.find(acc => 
        acc.username === user.username &&
        acc.password === user.password
    );

    if (!foundUser) return "Wrong credentials";

    return null;
}

export default validateLogin;