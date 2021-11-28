function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url, {
        method: "GET",
        queries: {
            page: page
        }
    });
    if (response.ok) {
        let doc = response.html();
        let next = doc.select('ul.pagination').select('li.active + li').text();
        let data = [];
        doc.select(".list-new .row").forEach(e => {
            data.push({
                name: e.select(".col-title h3").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select(".thumb img").first().attr("src").replace('-thumbw',''),
                description: e.select(".chapter-text").first().text(),
                host: "https://123truyen.com"
            });
        });

        return Response.success(data, next);
    }
    return null;
}