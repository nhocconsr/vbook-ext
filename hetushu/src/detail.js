function execute(url) {
    const doc = Http.get(url.replace('m.','www.')).html();
    return Response.success({
        name: doc.select("h2").text(),
        cover: doc.select(".book_info img").first().attr('src'),
        author: doc.select(".book_info div").first().text().replace('作者：',''),
        description: doc.select(".intro").text(),
        detail: doc.select(".book_info div").first().text(),
        ongoing: doc.select(".continue").html().indexOf("连载") != -1,
        host: "https://www.hetushu.com"
    });
}