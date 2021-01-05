function execute(url) {
    var doc = Http.get(url).string();
    const regex = /data = '(.+)'/g;
    const arr = regex.exec(doc);
    const images =  arr[1].split('|');
    var data = [];
    for(var i = 0; i < images.length; i++){
        data.push({
            "link": images[i],
            "referer": ""
        });
    }

    return Response.success(data);
}