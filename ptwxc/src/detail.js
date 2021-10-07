function execute(url) {
    var doc = Http.get(url.replace('m.','www.')).html();
    return Response.success({
        name: doc.select(".bookintro h2").first().html().replace(/<span>.*/g,''),
        cover: doc.select(".hover-img img").first().attr("src"),
        author: doc.select(".author").first().text() || '^^!',
        description: doc.select(".intro").first().text(),
        detail : doc.select(".statistics span").first().text() + '<br>作者： ' +doc.select(".author").first().text(),
        ongoing: doc.select(".label").first().text().indexOf("連載") != -1,
        host: "https://www.ptwxc.com"
    });
}