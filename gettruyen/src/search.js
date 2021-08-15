function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://gettruyen.com/search')
        .params({'q':key,'page':page})
        .html()
    if (doc){
        var next = doc.select("nav").select("li a").get(3).attr("href").split('=')[2];
        const el = doc.select(".gap-y-4 a")
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h4").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("div.bg-cover").first().attr("style").split(/[()]/)[1],
                description: e.select(".text-white").first().text(),
                host: "https://gettruyen.com"
            })
        }
        return Response.success(data, next)
    }
    return null;
}