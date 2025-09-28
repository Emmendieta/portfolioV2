import auth from "./utils/auth.js";
import abm from "./utils/abm.js";

const updateUserData = async () => {
    try {

        let inputUserId = document.getElementById("inputUserId").value;
        //FALTA EL TEMA DE SI SE QUIERE CAMBIAR EL EMAIL QUE NO EXISTA O SI ES EL MISMO USUARIO QUE SE NO SE TOME EN CUENTA EL EMAIL
        let inputEmail = document.getElementById("inputEmail").value;
        //TAMBIEN SE TIENE QUE VERIFICAR QUE NO SE GUARDE EL PASSWORD HASHEADO DE VUELTA, PORQUE SI NO VAS A TENER QUE ESCRIBIR
        //EL PASSWORD COMO SI FUESE HASHEADO PARA QUE LO HASHEE DE VUELTA
        let inputPassword = document.getElementById("inputPassword").value;
        let inputVerifyPassword = document.getElementById("inputVerifyPassword").value;
        //TAMBIEN LOS ROLES PODRIAN VENIR COMO PARA SELECCIONARLOS Y NO TENER ERRORES:
        let inputRole = document.getElementById("inputRole").value;
        const verify = verifyData(inputUserId, inputEmail, inputPassword, inputVerifyPassword, inputRole);
        if (verify === false) { return; }
        else if (inputPassword !== inputVerifyPassword) {
            //SWEET ALERT:
            alert("Error: The fields of Password and Verify Password must be the same!");
            return;
        };
        let currentUser = await auth.getCurrentUser();
        if (currentUser.error) {
            //LOGGER:
            console.error(currentUser.error);
            //SWEET ALERT
            alert("Error getting the information form the user!");
            return;
        };
        const data = {
            //email: inputEmail,
            password: inputPassword,
            role: inputRole
        };
        let uid = currentUser.response._id;
        let url = `users/${uid}`;
        const update = await abm.updateData(url, data);
        if (update.error) {
            //LOGGER:
            console.error(update.error.message);
            //SWEET ALERT:
            alert("Error Updating personal data!");
            return;
        };
        //SWEET ALERT:
        alert("User Data Updated!");
        location.reload();
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Ooooppsss! An error has ocurred. Error: " + error.message);
    }
};

const verifyData = (inputUserId, inputEmail, inputPassword, inputVerifyPassword, inputRole) => {
    if (!inputUserId || !inputEmail || !inputPassword || !inputVerifyPassword || !inputRole) {
        //SWEEET ALERT:
        alert("All fields must be completed if you want updated User Data!");
        return false;
    };
};

document.getElementById("btnUpdateUserData").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        updateUserData();
    };
});

document.getElementById("btnUpdateUserData").addEventListener("click", updateUserData);
