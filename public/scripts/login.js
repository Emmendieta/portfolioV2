document.getElementById("btnLogin").addEventListener("click", async () => {
    try {
        const inputEmail = document.getElementById("inputEmailLogin").value;
        const inputPassword = document.getElementById("inputPasswordLogin").value;
        //FALTA VALIDAR QUE SEAN DATOS CORRECTOS LOS DE ARRIBA!
        const data = {
            email: inputEmail,
            password: inputPassword
        };
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) 
        };
        const url = "/api/auth/login";
        let response = await fetch(url, opts);
        response = await response.json();
        //FALTA CORREGIR EN EL CASO DE QUE SUCEDE UN ERROR Y EL LOGGER
        if (response.error) { alert(response.error.message || JSON.stringify(response.error)); }
        else {
            //CAMBIAR ESTE ALERT:
            alert("Login Success!");
            location.replace("/");
        }
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        alert("Ooooppsss! An error has ocurred. Error: " + error.message);
    }
});