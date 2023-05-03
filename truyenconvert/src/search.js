function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://truyenconvert.net/tim-kiem',  {
        method: "GET",
        queries: {
            key : key,
            trang : page
        }
    });
    if (response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li:has(a.active) + li").text()
        let el = doc.select(".list-content .list-row-img")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").attr("data-src"),
                description: e.select(".row-author").first().text(),
                host: "https://truyenconvert.net"
            })
        }
        return Response.success(data,next)
    }
    return null;
}