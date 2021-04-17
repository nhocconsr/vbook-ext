function execute(url) {
    var doc = Http.get(url).html();
    var pages = doc.select("#id_pagination > li");
    var data = [];
    if (pages.size() > 1) {
        for (var i = 0; i < pages.size() - 1; i++) {
            data.push(url + "/" + (i + 1));
        }
    } else {
        data.push(url);
    }
    
    return Response.success(data);
}