function execute(url) {
    var bookID = url.split("/").pop();
    const doc = Http.get('https://ac.qq.com/Comic/comicInfo/id/'+bookID).html();
    var el = doc.select("ol.works-chapter-list li a");
    const data = [];
    for (var i in el) {
        var e = el[i];
        var title = e.attr('title')
        if(title){
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://truyen3s.com"
            })
        }
    }
    return Response.success(data);
}