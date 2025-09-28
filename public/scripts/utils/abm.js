const baseHeader = { "Content-Type": "application/json" };

const getData = async (baseUrl) => {
    try {
        if (!baseUrl) {
            //LOGGER:
            console.error(error.message);
            //SWEET ALERT:
            alert("URL is needed!");
            return;
        };
        let opts = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        let url = `/api/${baseUrl}`;
        let response = await fetch(url, opts);
        return await response.json();
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Error getting data!")
    }
};

const getDataPopulate = async (baseUrl, populateFields) => {
    try {
        if (!baseUrl || !populateFields) {
            //LOGGER:
            console.error(error.message);
            //SWEET ALERT:
            alert("All fields are needed!");
            return;
        }
        let opts = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        let populateQuery = Array.isArray(populateFields) ? populateFields.join(",") : populateFields;
        let url = `/api/${baseUrl}populated?populate=${populateQuery}`;
        let response = await fetch(url, opts);
        return await response.json();
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Error getting populated data!")
    }
};

const updateData = async (baseUrl, data = {}) => {
    try {
        let opts;
        if (!baseUrl) {
            //SWEET ALERT:
            alert("Error in update Data, missing Url or Method!");
            return;
        }
        if (data == {}) {
            //SWEET ALERT:
            alert("No Data to update!");
            return;
        } else {
            opts = {
                method: "PUT",
                headers: baseHeader,
                body: JSON.stringify(data)
            };
            let url = `/api/${baseUrl}`;
            let response = await fetch(url, opts);
            response = await response.json();
            return response;
        }
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Error updating data!")
    }
};

const deleteData = async (baseUrl, id) => {
    try {
        let opts;
        if (!baseUrl || !id) {
            //SWEET ALERT:
            alert("Error in deleting Data, missing Url or Id!");
            return;
        };
        opts = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        };
        let url = `/api/${baseUrl}/${id}`;
        let response = await fetch(url, opts);
        response = await response.json();
        return response;
    } catch (error) {
        //LOGGER:
        console.error(error.message);
        //SWEET ALERT:
        alert("Error updating data!")
    }
}

export default { updateData, getDataPopulate, getData, deleteData };