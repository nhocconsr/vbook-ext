function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://www.truyendichh.net/danh-sach/'+url,  {
        method: "GET",
        queries: {
            page : page
        }
    });
    if (response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li:has(a.active) + li").text()
        let el = doc.select(".box-cate-list ul li")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select(".name-chapter").first().text(),
                host: "https://www.truyendichh.net"
            })
        }
        return Response.success(data,next)
    }
    return null;
}