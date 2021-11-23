function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://doujins.com/'+url).params({
        sort : '-created_at',
        page : page
    }).html();
    var next = doc.select('.pagination').select('li.active + li').first().text();
    var allItem = doc.select('#content .row .col-6')
    var list = [];
    allItem.forEach(item => list.push({
        name: item.select('a').text(),
        link: item.select('a').attr('href'),
        cover: item.select('img').attr('src'),
        description: item.select('.single-line').last().text().replace('Artist: ','') || 'Unknow',
        host: "https://doujins.com"
    }));   
    return Response.success(list,next)
}