function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".post-title").text(),
        cover: doc.select(".summary_image img").first().attr('src'),
        description: doc.select(".desc").text(),
        detail: doc.select(".post-status").html(),
        category: doc.select(".genres").html(),
        host: "https://yocomic.com"
    });
}