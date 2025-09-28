const login = async () => {
    try {
        const inputEmail = document.getElementById("inputEmailLogin").value;
        const inputPassword = document.getElementById("inputPasswordLogin").value;
        //FALTA VALIDAR QUE SEAN VALORES CORRECTOS:
        if (!inputEmail || !inputPassword) {
            //SWEET ALERT:
            alert("You must complete all fileds!");
            return;
        };
        const data = { 
            email: inputEmail,
            password: inputPassword
        };
        const opts = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };
        const url = "/api/auth/login";
        let response = await fetch(url, opts);
        response = await response.json();

        if (response.error) {
            //SWEET ALERT
            alert(response.error.message || JSON.stringify(response.error));
        } else {
            //SWEET ALERT
            alert("Login Success!");
            location.replace("/");;
        }
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Ooooppsss! An error has ocurred. Error: " + error.message);
    }
};

document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnLogin").addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        login();
    };
});
document.getElementById("inputPasswordLogin").addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        login();
    }
});
