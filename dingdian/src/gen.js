function execute(url, page) {
    var base = 'https://www.dingdian666.com'
    if (!page) page = '1';
    const doc = Http.get('https://www.dingdian666.com/sort/'+url+'_'+page+'/').html();
    const el = doc.select(".lastupdate ul li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var link = e.select(".name a").attr('href');
        data.push({
            name: e.select(".name a").first().text(),
            link: link,
            cover: 'https://www.dingdian666.com/files/article/image/86/86066/86066s.jpg',
            description: e.select(".zuo").first().text(),
            host: 'https://www.dingdian666.com',
        })
    }
    return Response.success(data,(parseInt(page)+1).toString())
}