function execute(url) {
    var doc = Http.get(url).html();
    return Response.success({
        name: doc.select("#Title").text(),
        cover: doc.select(".book-page-cover img").first().attr("src"),
        author: doc.select("#Artist a[href~=Artist]").first().text() || '^^!',
        description: doc.select("#Tag").first().text(),
        detail : 'Uploader : ' + doc.select("#Uploader").first().text() + '<br>Artist : ' +doc.select("#Artist").first().text(),
        ongoing: doc.select(".post-status").html().indexOf("OnGoing") != -1,
        host: "https://www.tsumino.com"
    });
}