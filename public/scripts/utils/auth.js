const getCurrentUser = async () => {
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    };
    try {
        const url = "/api/auth/current";
        let response = await fetch(url, opts);
        return await response.json();
    } catch (error) {
        //FALTA LOGGER
        console.error(error);
        return { error: true };
    }
};

export default { getCurrentUser };
