function execute(url) {
    const doc = Http.get(url).html()
 Console.log(doc)
    return Response.success({
        name: doc.select("h1.font-white").text(),
        cover: doc.select(".cover-col img").first().attr('src'),
        description: doc.select(".description").text(),
        detail: null,
        category: null,
        host: "https://www.royalroad.com"
    });
}