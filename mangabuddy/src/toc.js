function execute(url) {
    var name = url.replace("https://mangaforest.com/","")
    let response = fetch("https://mangaforest.com/api/manga/"+name+"/chapters");
    if (response.ok) {
    var doc = response.html();
    var data =[];
    var el = doc.select(".chapter-select option")
    el.forEach(e => data.push({
            name: e.text(),
            url: e.attr("value"),
            host: "https://mangaforest.com"
        }))
    return Response.success(data.reverse());
    }
    return null;
}