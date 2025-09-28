const setFormatDate = (inputDate) => {
    try {
        if(!inputDate) { return false; }
        let date = new Date(inputDate);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date;
    } catch (error) {
        //LOGGER:
        console.error(error.message);
    }
};


export default { setFormatDate };