function execute(url) {
    const doc = Http.get(url + '/').html();
    return Response.success({
        name: doc.select("h1.story-title").first().text(),
        cover: doc.select("img.book_cover").first().attr('src').replace('//','https://'),
        author: doc.select(".created-by").first().text(),
        description: doc.select("#story_description").html().replace(/<div id="func-btns">(.*?)<\/div>/g, ''),
        detail: doc.select("table > tbody > tr:nth-child(1)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(3)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(4)").html(),
        host: "https://truyenwiki.net",
    });
}