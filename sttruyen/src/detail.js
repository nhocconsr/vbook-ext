function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h3").text(),
        cover: doc.select(".view img").first().attr("src"),
        author: '^^!',
        description: doc.select(".container p").first().text(),
        detail: doc.select(".mb-2").html(),
        host: "https://sttruyen.com",
    });
}