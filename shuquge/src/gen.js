function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get("http://www.shuquge.com/category/"+url+"_"+page+".html").html();

    var next = doc.select(".wrap").select("b.a-active + a").text();

    const el = doc.select(".l ul li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var booKId = e.select(".s2 a").first().attr("href").split('/')[4];
        var fol = booKId.slice(0, -3);
        data.push({
            name: e.select(".s2 a").first().text(),
            link: e.select(".s2 a").first().attr("href"),
            cover: 'http://www.shuquge.com/files/article/image/'+fol+'/'+booKId+'/'+booKId+'s.jpg',
            description: e.select(".s4").text(),
            host: "http://www.shuquge.com"
        })
    }

    return Response.success(data, next)
}