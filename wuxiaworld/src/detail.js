function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select(".novel-body h2").first().text(),
        cover: doc.select(".novel-left img").first().attr("src"),
        author: doc.select(".novel-container > div > div:nth-child(5)").first().text(),
        description: doc.select(".fr-view p").html(),
        detail: doc.select(".novel-container > div > div:nth-child(5)").first().html() + '<br>' +doc.select(".genres").first().html(),
        host: "https://www.wuxiaworld.com/",
    });
}