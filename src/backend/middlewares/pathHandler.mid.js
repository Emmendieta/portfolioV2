const pathHandler = (req, res) => {
    const message = "Not Found URL";
    const data = {
        method: req.method,
        url: req.originalUrl,
        error: message
    };
    res.status(404 || 401).render("error", data);
};

export default pathHandler;