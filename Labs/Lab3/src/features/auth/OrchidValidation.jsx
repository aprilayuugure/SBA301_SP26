export const validateOrchid = (orchid) => {
    const errors = {};

    if (!orchid.name || orchid.name.trim() === "") errors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(orchid.name.trim())) errors.name = "Name must contain only letters";

    if (!orchid.description || orchid.description.trim() === "") errors.description = "Description is required";
    if (!orchid.category || orchid.category.trim() === "") errors.category = "Category is required";
    if (!orchid.price || parseFloat(orchid.price) <= 0) errors.price = "Price must be greater than 0";
    
    return errors;
}

export default validateOrchid;