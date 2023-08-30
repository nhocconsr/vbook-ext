function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://docsachhay.net/ajax/searchLive',  {
        method: "GET",
        queries: {
            inputContent : key,
        }
    });
    if (response.ok){
        let doc = Html.parse(response.json().html);
        let el = doc.select(".novel-list .novel-item")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h4").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select(".novel-cover img").attr("src"),
                description: e.select(".novel-stats span").first().text(),
                host: "https://docsachhay.net"
            })
        }
        return Response.success(data)
    }
    return null;
}