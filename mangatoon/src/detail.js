function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1.comics-title").text(),
        cover: doc.select(".detail-top-right img").first().attr("src"),
        author: doc.select(".created-by").first().text(),
        description: doc.select(".description").html(),
        detail: doc.select("div.description-tag").html(),
        category: doc.select("div.description-tag").html(),
        host: "https://mangatoon.mobi"
    });
}