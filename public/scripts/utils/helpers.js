const setFormatDate = (inputDate) => {
    try {
        if (!inputDate) { return false; }
        let date = new Date(inputDate);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date;
    } catch (error) {
        //LOGGER:
        console.error(error.message);
    }
};

// Helper: capitalizar primera letra (VER SI ESTE LO METO EN OTRO SCRIPT)
const capitalize = (str) => {
    if(!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default { setFormatDate, capitalize };