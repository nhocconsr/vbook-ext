function execute(url) {
        url = url.replace("lxhentai.com","lxmanga.com")
    url = url.replace("lxhentai.org","lxmanga.com")
    let doc = fetch(url).html();
    let el = doc.select(".mb-4 > ul > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select(".text-ellipsis").text(),
            url: e.attr("href"),
            host: "https://lxmanga.com"
        })
    }
    return Response.success(data);
}