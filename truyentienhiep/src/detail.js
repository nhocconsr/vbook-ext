function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h2").first().text(),
        cover: doc.select(".large-item img").first().attr("src"),
        author: doc.select(".author").first().text(),
        description: doc.select(".book-description").first().text(),
        detail: doc.select(".listing-meta").first().html(),
        host: "https://truyentienhiep.net",
    });
}