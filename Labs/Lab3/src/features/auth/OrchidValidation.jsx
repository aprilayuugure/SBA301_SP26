export const validateOrchid = (orchid) => {
    const errors = {};

    if (!orchid.name || orchid.name.trim() === "") errors.name = "Name is required";
    if (!orchid.description || orchid.description.trim() === "") errors.description = "Description is required";
    if (!orchid.category || orchid.category.id === "") errors.category = "Category is required";
    if (!orchid.price || parseFloat(orchid.price) <= 0) errors.price = "Price must be greater than 0";
    
    return errors;
}

export default validateOrchid;