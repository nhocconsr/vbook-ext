function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".book-img img").first().attr('src'),
        description: doc.select('.text-left').text(),
        detail: doc.select(".comment-wrap").html(),
        category: doc.select('.tag'),
        host: "https://truyenvipfull.com/"
    });
}