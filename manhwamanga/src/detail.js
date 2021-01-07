function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h3.title").first().text(),
        cover: doc.select(".book img").first().attr("src"),
        author: doc.select(".info > div:nth-child(1)").first().text(),
        description: doc.select(".desc-text p").html(),
        detail: doc.select(".info").html(),
        host: "https://manhwamanga.net",
    });
}