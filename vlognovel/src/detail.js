function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1.novel-title").text(),
        cover: doc.select(".fixed-img img").first().attr('data-src'),
        description: doc.select(".description").text(),
        detail: doc.select(".header-stats span").html(),
        category: doc.select(".categories ul li a").html(),
        host: "https://vlognovel.com"
    });
}