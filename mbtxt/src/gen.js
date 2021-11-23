load('libs.js');
function execute(url, page) {
    var host = 'https://www.mbtxt.la';
    if (!page) page = '1';
    const doc = Http.get('https://www.mbtxt.la/'+url+'-'+page+'.html').html('gbk');
    var next = doc.select("#pagelink").select("li.active + li").text()
    const allBox = doc.select(".content .bookbox")
    const data = [];
    allBox.forEach(box => {
        var link = box.select("h4 a").first().attr('href');
        var m, id, cover;
        if ((m = link.match(/(\d+)/)) && m[0] && (id = m[0])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
        }
        data.push({
            name: box.select("h4 a").first().text(),
            link: link,
            cover: cover || 'https://www.mbtxt.la/modules/article/images/nocover.jpg',
            description: box.select(".author").first().text().replace('作者：',''),
            host: 'https://www.mbtxt.com',
        })
    });
    return Response.success(data, next)
}