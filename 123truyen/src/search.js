load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL, {
        method: "GET",
        queries: {
            q : key
        }
    });
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".list-new .row").forEach(e => {
            data.push({
                name: e.select(".col-title h3").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select(".thumb img").first().attr("src").replace('-thumbw',''),
                description: e.select(".chapter-text").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(data);
    }
    return null;
}