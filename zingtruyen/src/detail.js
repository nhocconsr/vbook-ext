load('config.js');

function execute(url) {
    //url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    const doc = Http.get(url).html()
    doc.select('.description div').remove();
    return Response.success({
        name: doc.select("h1.title").text(),
        cover: doc.select(".thumb img").first().attr('src'),
        author: doc.select("[itemprop=author]").first().text(),
        description: doc.select("[itemprop=description]").text(),
        detail: doc.select("[itemprop=author]").text() +'<br>'+doc.select(".infos p").get(3).text(),
        category: doc.select("[itemprop=genre]").html(),
        host: BASE_URL
    });
}