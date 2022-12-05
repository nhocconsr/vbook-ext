function execute(key, page) {
    sleep(1000)
    if (!page) page = '1';
    var response = fetch("https://k.2kxs.org/modules/article/search.php", {
        method: "POST",
        body: {
            searchkey: key
        }
    });
    if (response.ok) {
        let doc = response.html()
        var el = doc.select("#bookcon > tbody > tr:nth-child(1) ~tr ");
        var novelList = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            novelList.push({
                name: e.select("td:nth-child(2) > p > a").text(),
                link: e.select("td:nth-child(2) > p > a").attr("href"),
                description: e.select("#booklast > p > a").text()
            });
        }
        return Response.success(novelList);
    }
    return null
}