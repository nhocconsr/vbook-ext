function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://truyenhaytv.com'+url).params({page: page}).html();
    const el = doc.select(".box_list .li_truyen")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.select("img").first().attr("data-src");
        if (img.startsWith("//")){
            img = img.replace('//','https://')
        }
        data.push({
            name: e.select(".name").first().text(),
            link: e.select("a").first().attr("href"),
            cover: img,
            description: e.select(".chap_name").first().text(),
            host: "https://truyenhaytv.com"
        })
    }
    var next = parseInt(page) + 1;
    return Response.success(data, next.toString())
}