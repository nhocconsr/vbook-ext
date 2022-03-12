function execute(url) {
    var story_id = parseInt(url.split("-").pop())
    var doc = Http.get(url+"/").html()
    var lastpage = parseInt(doc.select("#order_list option").last().attr("value"))
    const data = [];
    for(var page=1 ; page <=lastpage ; page++){
        var chapters = fetch("https://ztruyen.vn/ajax/load_chapter", {
        method: "POST", 
            body: {
                "page": page,
                "story_id": story_id
            }
        }).html()
        var el = chapters.select(".item-col-1 .item-col-md-2")
        el.forEach(e => data.push({
            name: e.select("a").text(),
            url: e.select("a").attr("href"),
            host: "https://ztruyen.vn"
        }));
    }
    return Response.success(data)
}