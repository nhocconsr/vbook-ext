function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://gettruyen.com/search', {
        method: "GET",
        queries: {
            tags : url,
            page : page
        }
    });
    if (response.ok) {
        let doc = response.html();
        let next = doc.select("nav").select("li a").get(3).attr("href").split('=')[2];
        let data = [];
        doc.select(".gap-y-4 a").forEach(e => {
            data.push({
                name: e.select("h4").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("div.bg-cover").first().attr("style").split(/[()]/)[1],
                description: e.select(".text-white").first().text(),
                host: "https://gettruyen.com"
            });
        });

        return Response.success(data, next);
    }
    return null;
}