function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://www.royalroad.com/fictions/search', {
        method: "GET",
        queries: {
            title : key,
            page: page
        }
    });

    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".fiction-list .fiction-list-item").forEach(e => {
            data.push({
                name: e.select("h2.fiction-title").first().text(),
                link: "https://www.royalroad.com" + e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select("div.margin-top-10").first().text(),
                host: "https://www.royalroad.com"
            });
        });

        var next = parseInt(page, 10) + 1;

        return Response.success(data, next.toString());
    }
    return null;
}