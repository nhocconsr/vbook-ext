function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select(".story-info-right h1").first().text(),
        cover: doc.select(".story-info-left img").first().attr('src'),
        author: doc.select(".story-info-right .a-h").first().text(),
        description: doc.select(".panel-story-info-description").html(),
        detail: doc.select(".story-info-right h2").html() + '<br>' +doc.select(".story-info-right-extent p").get(0).html(),
        host: "https://manganelo.com",
    });
}