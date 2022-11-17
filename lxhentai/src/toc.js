function execute(url) {
    let doc = fetch(url).html();
    let el = doc.select(".mb-4 > ul > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select(".text-ellipsis").text(),
            url: e.attr("href"),
            host: "https://lxhentai.org"
        })
    }
    return Response.success(data);
}