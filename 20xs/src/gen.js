function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.20xs.org/shuku/0_'+url+'_0_'+page+'.html').html();

    var next = doc.select("#pagelink").select("strong + a").text().split(' ')[1];

    const el = doc.select(".novelslist2 dl")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".book_other span").first().text(),
            host: "https://www.20xs.org"
        })
    }

    return Response.success(data, next)
}