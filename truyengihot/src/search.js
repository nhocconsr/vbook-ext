load('config.js')
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL+'/danh-sach-truyen.html',{ 
        method: "GET",
        queries: {
            listType : 'thumb',
            page : page,
            text_add : key,
            type_add : 'truyen'
    }});
    if(response.ok){
        let doc = response.html();
        let next = doc.select('li:has(a.current) + li').text();
        let allItem = doc.select('ul.contentList li')
        let list = [];
        allItem.forEach(item => {
            list.push({
                name: item.select('.title a').text(),
                link: item.select('.title a').attr('href'),
                cover: item.select('.thumb img').attr('data-src').replace('//','https://'),
                description: 'Chap '+item.select('.chapter-link').last().text(),
                host: BASE_URL
            })
        });
        return Response.success(list,next)
    }
    return null;
}