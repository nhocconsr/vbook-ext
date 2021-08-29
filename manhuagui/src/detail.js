function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".hcover img").first().attr('src'),
        description: doc.select("#intro-all").text(),
        detail: doc.select(".detail-list li").first().html(),
        category: doc.select(".detail-list li").get(1).html(),
        host: "https://www.manhuagui.com"
    });
}