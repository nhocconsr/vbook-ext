function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://truyenhaytv.com/the-loai/'+url).params({page: page}).html();

    const el = doc.select(".comic-cell")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.select(".pic img").first().attr("data-src");
        if (img.startsWith("//")){
            img = img.replace('//','https://')
        }
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: img,
            description: e.select(".desc").first().text().split(':')[0],
            host: "https://truyenhaytv.com"
        })
    }
    var next = parseInt(page) + 1;
    return Response.success(data, next.toString())
}