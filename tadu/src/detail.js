function execute(url) {
    const nUrl = url.replace('m.','www.')
    const doc = Http.get(nUrl).html();
    return Response.success({
        name: doc.select("a.bkNm").first().text(),
        cover: doc.select("a.bookImg img").first().attr("data-src"),
        author: doc.select(".bookNm span").first().text(),
        description: doc.select("p.intro").html(),
        detail: doc.select(".sortList a").first().html() + '<br>' +doc.select(".datum span").first().html(),
        host: "https://www.tadu.com",
    });
}