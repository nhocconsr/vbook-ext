function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".summary_image img").first().attr('src'),
        description: doc.select(".description-summary").text(),
        detail: doc.select(".post-content").html(),
        category: doc.select(".genres-content").html(),
        host: "https://hitruyen.vip"
    });
}