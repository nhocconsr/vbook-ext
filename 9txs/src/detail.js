function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h1").text().split('/')[0],
        cover: doc.select(".bookimg img").first().attr("src"),
        author: doc.select(".detail p a").first().text(),
        description: doc.select(".intro").text(),
        detail: doc.select(".detail p").get(0).html(),
        host: "https://9txs.com"
    });
}