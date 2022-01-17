function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1.title-commic-detail").text(),
        cover: doc.select(".image-commic-detail img").first().attr('data-src'),
        description: doc.select(".desc-commic-detail").text(),
        detail: doc.select(".categories-list-detail-commic").html(),
        category: doc.select(".categories-list-detail-commic").html(),
        host: "https://vlognovel.com"
    });
}