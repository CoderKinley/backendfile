let logger = (req,res,next) => {
    let methods = req.method;
    let url = req.url;
    let time = new Date().getDate();
    // terminate the spinning browser
    console.log(time, methods, url);
    next();
}

module.exports = logger;