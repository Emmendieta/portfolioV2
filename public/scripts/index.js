import auth from "./utils/auth.js";

window.addEventListener("DOMContentLoaded", async () => {
    const currentUser = await auth.getCurrentUser();
    if (currentUser.error === "jwt expired") { 
        //SWEET ALERT
        alert("Token expired, please login again!");
        return; 
    }
    else if (currentUser.error === "Bad Auth!!!" || "Forbidden!!!") { return; }
    else if (currentUser.response.role === "admin") {
        renderAdminControls("person", "cardPerson", "topRightPerson");
        renderAdminControls("educations", "cardEducation", "topRightEducation");
        renderAdminControls("works", "cardWork", "topRightWork");
        renderAdminControls("proyects", "cardProyect", "topRightProyect");
        renderAdminControls("languages", "cardLanguage", "topRightLanguage");
    };
});

const renderAdminControls = (resource, cardClass, topRightId) => {
    //Boton Crear:
    const buttonAdd = document.createElement("a");
    buttonAdd.href = `/${resource}/create`;
    buttonAdd.className = "btn btn-outline-success";
    buttonAdd.id = `${resource}AddBtn`;
    buttonAdd.innerText = `New ${capitalize(resource)}`;

    const topRightContainer = document.getElementById(topRightId);
    if (topRightContainer) topRightContainer.appendChild(buttonAdd);

    //Editar/Eliminar en cada card:
    const cards = document.querySelectorAll(`.${cardClass}`);
    cards.forEach(card => {
        const cardBody = card.querySelector(".card-body");
        const id = card.querySelector("img")?.getAttribute("alt")?.trim();
        const name = card.querySelector(`#${resource}NameId`)?.innerText || resource;

        if (!id) return;

        //Boton editar:
        const editButton = document.createElement("a");
        editButton.href = `/${resource}/edit/${id}`;
        editButton.className = "btn btn-outline-primary me-2";
        editButton.innerHTML = "Edit";

        //Boton Eliminar:
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-outline-danger";
        deleteButton.innerText = "Delete";

        //Evento para eliminar:
        deleteButton.addEventListener("click", async () => {
            //Cambiar por Sweet Alert
            const confirmDelete = confirm(`Are you sure you want to delete ${name}?`);
            if (!confirmDelete) return;

            try {
                const url = `/api/${resource}/${id}`;
                const deleteOpts = {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                };
                const response = await fetch(url, deleteOpts);
                const result = await response.json();

                if (result.error?.message) {
                    //Cambiar por Sweet Alert:
                    alert(result.error.message);
                } else {
                    //Cambiar por Sweet Alert:
                    alert(`${capitalize(resource)} deleted!`);
                    location.reload();
                }
            } catch (error) {
                //LOGGER
                console.error(error);
                alert(`Error deleting ${name}`);
            }
        });

        //Controles Admin:
        const adminControls = document.createElement("div");
        adminControls.className = "d-flex justify-content-end mt-2";
        adminControls.appendChild(editButton);
        adminControls.appendChild(deleteButton);
        cardBody.appendChild(adminControls);
    });
};

// Helper: capitalizar primera letra (VER SI ESTE LO METO EN OTRO SCRIPT)
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);