export const validateUser = (user) => {
    const errors = {};

    if (!user.accountName || user.accountName.trim() === "") errors.accountName = "Name is required";

    return errors;
}