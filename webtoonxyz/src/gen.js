function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get(url+'/page/'+page+'/?m_orderby=latest').html();
    var next = doc.select('.wp-pagenavi').select('span.current + a').text()
    var data = [];
    var el = doc.select(".page-listing-item .page-item-detail")
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i)
        data.push({
            name: e.select("h3.h5 a").first().text(),
            link: e.select("h3.h5 a").first().attr("href"),
            cover: e.select(".item-thumb img").first().attr("data-src"),
            description: e.select(".list-chapter > div:nth-child(1) a").text(),
            host: "https://www.webtoon.xyz"
        })
    }
    return Response.success(data,next)
}