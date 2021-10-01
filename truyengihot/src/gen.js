function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://truyengihot.net/danh-sach-truyen.html').params({
        listType : 'pagination',
        page : page,
        sort : 'last_update',
        sort_type : 'DESC'
    }).html();
    var next = doc.select('.pagination').select('li:has(.current) + li').text();
    var allItem = doc.select('ul.cw-list li')
    var list = [];
    for (var i in allItem){
        var item = allItem[i]
        list.push({
            name: item.select('.title a').text(),
            link: item.select('.title a').attr('href'),
            cover: item.select('.thumb').attr('style').split(/['']/)[1],
            description: 'Chap '+item.select('.chapter-link').last().text(),
            host: "https://truyengihot.net"
        })
    }

    return Response.success(list,next)
}