module.exports = function () {
    return function (req, res, next) {
        var url = req.baseUrl+req.path;
        url = url.replace(/\/[\w%]+/g,"/..");
        url = url.replace(/\/$/g,"");
        req.origin = url;
        next();
    }
};
