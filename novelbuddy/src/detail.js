function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".name h1").text(),
        cover: doc.select(".img-cover img").first().attr('data-src').replace('//','https://'),
        author: doc.select(".meta p > a").first().text(),
        description: doc.select("#info .content").text(),
        detail: doc.select(".meta p").html(),
        category: doc.select(".meta p").html(),
        host: "https://novelbuddy.com"
    });
}