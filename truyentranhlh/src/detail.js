function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select(".series-name a").text(),
        cover: doc.select(".a6-ratio div").first().attr('style').split("'")[1],
        author: doc.select(".series-information > div:nth-child(3)").first().text(),
        description: doc.select(".summary-content p").text(),
        detail: doc.select(".series-information > div:nth-child(1)").html(),
        category: doc.select(".series-information > div:nth-child(2)").html(),
        host: "https://truyentranhlh.net"
    });
}