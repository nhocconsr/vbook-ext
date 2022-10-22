function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".info1 img").first().attr('src'),
        description: doc.select('.info2 p').text(),
        detail: doc.select(".info3").html(),
        category: null,
        host: "https://k.2kxs.org"
    });
}