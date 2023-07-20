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
        //get phan trang
        let gtext = response.text();
        var page = gtext.match("page = '(.+)'")[1]
        var lastpage = gtext.match("lastpage = '(.+)'")[1]
        var type_add = gtext.match("type_add = '(.+)'")[1]
        var token = gtext.match('_token = "(.+)"')[1]
        let gpage = fetch(BASE_URL+"/frontend_controllers/list/pagi.php", {
            method : "POST",
            body : {
                    action: 'manga_pagi',
                    token: token,
                    listType: 'thumb',
                    type_add: type_add,
                    text_type: 'name',
                    order_add: 'last_update',
                    order_by_add: 'DESC',
                    page: page,
                    lastpage: lastpage
            }
        }).json().content;
        let next = Html.parse(gpage).select('li:has(a.current) + li').text();
        let doc = Html.parse(gtext);
        let allItem = doc.select('ul.cw-list li')
        let list = [];
        allItem.forEach(item => {
            list.push({
                name: item.select('.title a').text(),
                link: item.select('.title a').attr('href'),
                cover: item.select('.thumb img').attr('data-src'),
                description: 'Chap '+item.select('.chapter-link').last().text(),
                host: BASE_URL
            })
        });
        return Response.success(list,next)
    }
    return null;
}