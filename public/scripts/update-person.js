import auth from "./utils/auth.js";
import abm from "./utils/abm.js";
import helpers from "./utils/helpers.js";

const verifyData = (inputFirstName, inputLastName, inputDNI, inputCUIL, inputBirthday, inputJobTitle,
    inputCity, inputProvince, inputCountry, inputAbout) => {
    if (!inputFirstName || !inputLastName || !inputDNI || !inputCUIL || !inputBirthday || !inputJobTitle ||
        !inputCity || !inputProvince || !inputCountry || !inputAbout) {
        //SWEEET ALERT:
        alert("All fields must be completed if you want updated Personal Data!");
        return false;
    }
    //FALTA CREAR VALIDARORES PARA QUE SE INGRESEN BIEN LOS DATOS EN OTRO ARCHIVO
    else { return true; }
}

const updatePersonalData = async () => {
    try {
        const inputFirstName = document.getElementById("inputFirstName").value;
        const inputLastName = document.getElementById("inputLastName").value;
        const inputDNI = document.getElementById("inputDNI").value;
        const inputCUIL = document.getElementById("inputCUIL").value;
        const inputBirthday = document.getElementById("inputBirthday").value;
        const inputJobTitle = document.getElementById("inputJobTitle").value;
        const inputCity = document.getElementById("inputCity").value;
        const inputProvince = document.getElementById("inputProvince").value;
        const inputCountry = document.getElementById("inputCountry").value;
        const inputAbout = document.getElementById("inputAbout").value;
        const inputThumbnails = document.getElementById("inputThumbnails").value;
        const verify = verifyData(inputFirstName, inputLastName, inputDNI, inputCUIL, inputBirthday, inputJobTitle,
            inputCity, inputProvince, inputCountry, inputAbout);
        if (verify === false) { return; }
        else if (helpers.setFormatDate(inputBirthday) === false) {
            //LOGGER:
            console.error(inputBirthday);
            //SWEET ALERT
            alert("Error setting correct format for Birthday!");
            return;
        }
        else {
            let currentUser = await auth.getCurrentUser();
            if (currentUser.error) {
                //LOGGER:
                console.error(currentUser.error);
                //SWEET ALERT
                alert("Error getting the information form the user!");
                return;
            };
            let uid = currentUser.response._id;
            let url = `users/${uid}/`;
            currentUser = await abm.getDataPopulate(url, ["person"]);
            const data = {
                firstName: inputFirstName,
                lastName: inputLastName,
                dni: inputDNI,
                cuil: inputCUIL,
                birthday: helpers.setFormatDate(inputBirthday),
                jobTitles: inputJobTitle,
                about: inputAbout,
                city: inputCity,
                province: inputProvince,
                country: inputCountry,
                thumbnails: inputThumbnails
            };
            const pid = currentUser.response.person._id;
            url = `people/${pid}`;
            const update = await abm.updateData(url, data);
            if (update.error) {
                //LOGGER:
                console.error(update.error.message);
                //SWEET ALERT:
                alert("Error Updating personal data!");
                return;
            };
            //SWEET ALERT:
            alert("Personal Data Updated!");
            location.reload();
        }
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Ooooppsss! An error has ocurred. Error: " + error.message);
    }
};

document.getElementById("btnUpdatePersonData").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        updatePersonalData();
    };
});

document.getElementById("btnUpdatePersonData").addEventListener("click", updatePersonalData);
