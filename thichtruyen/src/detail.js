function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.story-intro-title").first().text(),
        cover: doc.select(".story-intro-image img").first().attr('src'),
        author: doc.select(".story-intro-author").first().text(),
        description: doc.select("#tab-over > div > p:nth-child(1)").html(),
        detail: doc.select(".story-intro-author").html()+'<br>'+doc.select(".story-intro-chapper").html()+'<br>'+doc.select(".lst-tag").html(),
        host: "https://thichtruyen.vn",
    });
}