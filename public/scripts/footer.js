import auth from "./utils/auth.js";
import abm from "./utils/abm.js";

const setSocialMedias = async () => {
    try {

        const currentUser = await auth.getCurrentUser();
        if (currentUser.error === "jwt expired") {
            //SWEET ALERT
            alert("Token expired, please login again!");
            return;
        }
        else if (currentUser.error === "Bad Auth!!!" || currentUser.error === "Forbidden!!!") { return; }
        const isAdmin = currentUser?.response?.role === "admin";
        if (isAdmin) {

            //Social Medias:
            const socialMediaItems = document.querySelectorAll("#socialMediaList li");
            socialMediaItems.forEach(li => {
                const sid = li.getAttribute("data-id");
                renderAdminControls(li, "socialMedias", sid);
            });

            //Contacts:
            const contactItems = document.querySelectorAll("#contactList li");
            contactItems.forEach(li =>{
                const sid = li.getAttribute("data-id");
                renderAdminControls(li, "socialMedias", sid);
            });
        }
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Ooooppsss! An error has ocurred. Error: " + error.message);
    }
};

const renderAdminControls = (liElement, resource, sid) => {
    const adminControls = document.createElement("div");
    adminControls.className = "editionsControls";

    //Agregar boton crear:
    const adminContainer = document.getElementById("adminSocialMedias");
    if (adminContainer && !document.getElementById(`${resource}.addBtnSocialMedia`)) {
        //Boton crear:
        const buttonAddSocialMedia = document.createElement("a");
        buttonAddSocialMedia.href = `/${resource}/create`;
        buttonAddSocialMedia.className = "btn btn-outline-success";
        buttonAddSocialMedia.id = `${resource}.addBtnSocialMedia`;
        buttonAddSocialMedia.innerText = "Add Social Media";
        adminContainer.appendChild(buttonAddSocialMedia);
    };

    //Boton Editar:
    const editButtonSocialMedia = document.createElement("a");
    editButtonSocialMedia.href = `/${resource}/edit/${sid}`;
    editButtonSocialMedia.className = "btn btn-outline-primary btn-sm";
    editButtonSocialMedia.innerText = "Edit";

    //Boton Eliminar:
    const deleteButtonSocialMedia = document.createElement("button");
    deleteButtonSocialMedia.className = "btn btn-outline-danger btn-sm";
    deleteButtonSocialMedia.innerText = "Delete";

    //Evento Eliminar 
    deleteButtonSocialMedia.addEventListener("click", async () => {
        //SWEEET ALERT:
        const confirmDeleteSocialMedia = confirm("Are you sure you want to delete this social media?");
        if (!confirmDeleteSocialMedia) return;
        try {
            let url = `socialMedias`;
            let verify = await abm.deleteData(url, sid);
            verify = await verify.json();
            if (verify.error?.message) {
                //SWEET ALERT:
                alert("Ooooppsss! An error has ocurred trying to delete Social Media. Error: " + error.message);
            } else {
                //SWEET ALERT:
                alert("Social media Deleted!");
                liElement.remove();
            }
        } catch (error) {
            //LOGGER:
            console.error(error.message);
            //SWEET ALERT:
            alert("Ooooppsss! An error has ocurred. Error: " + error.message);
        }

    });

    adminControls.appendChild(editButtonSocialMedia);
    adminControls.appendChild(deleteButtonSocialMedia);
    liElement.appendChild(adminControls);
};

window.addEventListener("DOMContentLoaded", setSocialMedias);