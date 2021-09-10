function execute(url) {
    const nUrl = url.replace('m.','www.');
    const doc = Http.get(nUrl).html();
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select("#fmimg img").first().attr("src"),
        author: doc.select("#info a[href~=author]").first().text(),
        description: doc.select("#intro").text(),
        detail: doc.select("#info p").first().html()+'<br>'+doc.select("#info p").last().html(),
        ongoing : true,
        host: "https://www.wusanzw.com"
    });
}