import auth from "./utils/auth.js";

const divNavBarButtons = document.getElementById("navBarButtons");
//Falta la lógica del boton de buscar:
const btnSearch = document.getElementById("btnSearch");


const renderGuestNav = () => {
    divNavBarButtons.innerHTML = `
        <a class="btn btn-outline-success" href="/login" id="navBarBtnLogin">Login</a>
    `;
};

const renderUserNav = () => {
    divNavBarButtons.innerHTML = `
        <a class="btn btn-outline-success" href="/profile" id="navBarBtnProfile">Profile</a>
        <button class="btn btn-outline-success" type="button" id="navBarBtnSignOut">Sign Out</button>
    `;
};

const renderAdminNav = () => {
    divNavBarButtons.innerHTML = `
        <a class="btn btn-outline-success" href="/profile" id="navBarBtnProfile">Profile</a>
        <a class="btn btn-outline-success" href="/users" id="navBarBtnUsers">Users</a>
        <button class="btn btn-outline-success" type="button" id="navBarBtnSignOut">Sign Out</a>
    `;
};

const verifyCurrent = async () => {
    const response = await auth.getCurrentUser();
    if(response.error) { renderGuestNav(); }
    else {
        const role = response.response.role;
        if(role === "admin") { renderAdminNav(); }
        else if (role === "user") { renderUserNav(); }
        //Cambiar la linea de abajo:
        else { alert("Cambiar este alert, error al recuperar el rol del usuario en el navBar") };
        signOutHandler();
    }
};

const signOutHandler = () => {
    const btnSignOut = document.getElementById("navBarBtnSignOut");;;
    if(btnSignOut) {
        btnSignOut.addEventListener("click", async () => {
            try {
                const opts = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                };
                const url = "/api/auth/signout";
                await fetch(url, opts);
                localStorage.removeItem("token");
                location.replace("/");;
            } catch (error) {
                //CAMBIAR ESTE CONSOLE LOG
                console.error("Error al cerrar sesion: ", error);
            }
        });
    };
};


verifyCurrent();