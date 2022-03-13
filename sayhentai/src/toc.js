function execute(url) {
    let doc = fetch(url).html();
    let el = doc.select("ul.box-list-chapter li").select("a");
    let data = [];
    for (let i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://sayhentai.tv"
        })
    }
    return Response.success(data);
}