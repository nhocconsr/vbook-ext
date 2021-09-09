function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.entry-title").text(),
        cover: doc.select(".nov-head amp-img").first().attr('src'),
        author: doc.select("#author").first().text(),
        description: doc.select(".desc").text(),
        detail: doc.select(".info").html(),
        category: doc.select(".info").html(),
        host: "https://www.mtlnovel.com"
    });
}