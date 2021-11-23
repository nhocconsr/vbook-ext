load('libs.js');
function execute(url, page) {
    var host = 'https://www.19358.net';
    if (!page) page = '1';
    const doc = Http.get('https://www.19358.net/list/'+url+'/'+page+'.html').html();
    var next = doc.select("#pagelink").select("li.active + li").text()
    doc.select('.table tr').first().remove()
    const allBox = doc.select(".table tr")
    const data = [];
    for (var i = 0; i < allBox; i++) {
        var box = allBox.get(i);
        var link = box.select("a").first().attr('href');
        var m, id, cover;
        if ((m = link.match(/\/(\d+)\//)[1]) && (id = m)) {
            cover = String.format('image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
        }
        data.push({
            name: box.select("a").first().text(),
            link: link,
            cover: 'https://img.dahexs.net/timthumb.php?src='+cover+'&h=182&w=130&zc=1' || 'https://img.dahexs.net/novel/images/nocover.jpg',
            description: box.select(".text-muted").first().text().replace('作者：',''),
            host: 'https://www.mbtxt.com',
        })
    }
    return Response.success(data, next)
}