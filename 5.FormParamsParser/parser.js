let parser = (req) => {

    var paramsArray = [];
    var params = [];
    if (req.url.indexOf('?') > 0) {
        var urlData = req.url.split('?');
        paramsArray = urlData[1].split('&');
        //paramsArray = 'name=dario'
    };
    for (let i = 0; i < paramsArray.length; i++) {
        let paramsData = paramsArray[i].split('=');
        //console.log(paramsData);
        params[paramsData[0]] = paramsData[1];
    };
    return params;
}

module.exports = {
    parser
}