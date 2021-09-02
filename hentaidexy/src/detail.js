function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".summary_image img").first().attr('src'),
        author: doc.select(".author-content").first().text(),
        description: doc.select(".summary__content p").text(),
        detail: doc.select(".genres-content").html(),
        category: doc.select(".genres-content").html(),
        host: "https://hentaidexy.com"
    });
}