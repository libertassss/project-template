function getQueryByName (url,name) {
    var reg=new RegExp('[?&]'+name+'=([^&#]+)');
    var query=url.match(reg);
    return query?query[1]:null;
}

export default getQueryByName;