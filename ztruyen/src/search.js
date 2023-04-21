function execute(key) {
    const doc = fetch('https://ztruyen.vn/tim-kiem?tukhoa='+key).html();
    const el = doc.select(".box-cate-list ul li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").attr("title"),
            link: e.select("a").attr("href"),
            cover: e.select("a img").attr("src"),
            description: e.select(".name-author").text(),
            host: "https://ztruyen.vn"
        })
    }
    return Response.success(data)
}