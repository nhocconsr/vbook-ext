function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('http://www.ptwxc.com/rank/'+url+'/'+page+'.html').html();
    var next = doc.select('.pageLists').select('a.current + a').first().text();
    var allItem = doc.select('ul.list_details li')
    var list = [];
    for (var i in allItem){
        var item = allItem[i]
        list.push({
            name: item.select('h3 a').text(),
            link: item.select('h3  a').attr('href'),
            cover: item.select('.hover-img img').attr('src'),
            description: item.select('.author').first().text().replace('作者：','') || 'Unknow',
            host: "https://www.ptwxc.com"
        })
    }
    return Response.success(list,next)
}