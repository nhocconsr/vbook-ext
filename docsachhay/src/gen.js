function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://docsachhay.net/cat/'+url,  {
        method: "GET",
        queries: {
            page : page
        }
    });
    if (response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select(".novel-list .novel-item")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h4.novel-title").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").attr("data-src"),
                description: e.select(".novel-stats span").last().text(),
                host: "https://docsachhay.net"
            })
        }
        return Response.success(data,next)
    }
    return null;
}