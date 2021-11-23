function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://doujins.com/searches').params({
        words : key,
        sort : '-created_at',
        page : page
    }).html();
    doc.select('#previewfolder').remove();
    var next = doc.select('.pagination').select('li.active + li').first().text();
    var allItem = doc.select('#content .row').get(4).select('.col-6')
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