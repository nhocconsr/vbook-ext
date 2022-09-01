function execute(url, page) {
    if (!page) page = '1';
    let doc = fetch('https://truyengihay.net/danh-sach-truyen-tranh.html',{ 
        method: "GET",
        queries: {
            listType : 'pagination',
            page : page,
            sort : 'last_update',
            sort_type : 'DESC'
    }}).html();
    let next = doc.select('.pagination').select('li:has(.current) + li').text();
    let allItem = doc.select('ul.cw-list li')
    let list = [];
    allItem.forEach(item => {
        list.push({
            name: item.select('.title a').text(),
            link: item.select('.title a').attr('href'),
            cover: item.select('.thumb').attr('style').split(/['']/)[1],
            description: 'Chap '+item.select('.chapter-link').last().text(),
            host: "https://truyengihay.net"
        })
    });
    return Response.success(list,next)
}