function execute(url) {
    const yUrl = url.replace('m.','www.');
    const doc = fetch(yUrl).html();
    var dess = doc.select(".book-intro").text()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".bigpic img").first().attr('src'),
        author: doc.select(".authorname").first().text(),
        description: dess.substring(0,dess.indexOf("标")),
        detail: doc.select(".booktitle p").html(),
        category: doc.select(".booktitle p").html(),
        host: "https://www.yushugu.com"
    });
}