function execute(url) {
    var name = url.replace("https://mangaforest.me/","")
    let response = fetch("https://mangaforest.me/api/manga/"+name+"/chapters");
    if (response.ok) {
    var doc = response.html();
    var data =[];
    var el = doc.select(".chapter-select option")
    el.forEach(e => data.push({
            name: e.text(),
            url: e.attr("value"),
            host: "https://mangaforest.me"
        }))
    return Response.success(data.reverse());
    }
    return null;
}