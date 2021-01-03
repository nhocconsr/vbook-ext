function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.story-name").first().text(),
        cover: doc.select("img.poster").first().attr('src'),
        author: doc.select("table > tbody > tr:nth-child(2)").first().text(),
        description: doc.select("#active").html().replace(/<div id="func-btns">(.*?)<\/div>/g, ''),
        detail: doc.select("table > tbody > tr:nth-child(2)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(3)").html()+'<br>'+doc.select("table > tbody > tr:nth-child(4)").html(),
        host: "https://truyen88.net",
    });
}