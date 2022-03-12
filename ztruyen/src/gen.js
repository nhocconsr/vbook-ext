function execute(url, page) {
    var doc = Http.get(url).html()
    var category_id = doc.select(".col-12 .text-center").attr("data-category")
    var slug = doc.select(".col-12 .text-center").attr("data-slug")
    const data = [];
    for ( var page = 1 ;page <= 5; page ++){
    var chapters = fetch("https://ztruyen.vn/ajax/load_data_category/"+ page, {
        method: "POST", 
            body: {
                "category_id": category_id, 
                "slug": slug,
                "status_story": 1,
                "total_chapter": 0
            }
        }).text()
        var jsonChapter = JSON.parse(chapters).html
        var el = Html.parse(jsonChapter).select(".item")
        el.forEach(e => data.push({
            name: e.select("a").text(),
            link: e.select("a").attr("href"),
            cover: e.select("a .img-fluid ").attr('src'),
            description: null,
            host: "https://ztruyen.vn"
        }));
    }
    return Response.success(data)
}