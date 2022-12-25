load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    //const yUrl = url.replace('m.','www.');
    const doc = fetch(url).html();
    var dess = doc.select(".book-intro").text()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".bigpic img").first().attr('src'),
        author: doc.select(".authorname").first().text(),
        description: dess.substring(0,dess.indexOf("标")),
        detail: doc.select(".booktitle p").html(),
        category: doc.select(".booktitle p").html(),
        host: BASE_URL,
    });
}