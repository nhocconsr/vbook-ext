function execute(url, page) {
    if (!page) page = '1';
    const doc = fetch('https://baotangtruyengo.com/tim-truyen/'+url,{
        method : "GET",
        queries : {
            page : page,
            status : -1,
            sort : 0
        }
    }).html()
    var el = doc.select('#ctl00_divCenter .item')
    var next = doc.select('.pagination li.active + li').text()
    var data =[]
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select(".image img").first().attr("src"),
            description: e.select(".chapter a").first().text(),
            host: "https://baotangtruyengo.com"
        })
    }
    return Response.success(data,next)
}