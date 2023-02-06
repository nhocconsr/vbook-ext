function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://www.truyendichh.com/tim-kiem',  {
        method: "GET",
        queries: {
            tukhoa : key
        }
    });
    if (response.ok){
        let doc = response.html();
        let el = doc.select(".box-cate-list ul li")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select(".name-chapter").first().text(),
                host: "https://www.truyendichh.com"
            })
        }
        return Response.success(data)
    }
    return null;
}