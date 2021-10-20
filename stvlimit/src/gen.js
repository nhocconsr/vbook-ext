function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url+'&p='+page).html()
    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select("#searchviewdiv a.booksearch")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.select("img").first().attr("src");
        if(img.startsWith('//')) img = img.replace('//','https://')
        data.push({
            name: e.select(".searchbooktitle").first().text(),
            link: e.select("a").first().attr("href"),
            cover: img || 'https://i.imgur.com/KP0Z6Eh.png',
            description: e.select(".searchtag").first().text(),
            host: "https://sangtacviet.com"
        })
    }
    return Response.success(data, next)
}