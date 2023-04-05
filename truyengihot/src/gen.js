function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://truyengihotne.com/danh-sach-truyen-tranh.html',{ 
        method: "GET",
        queries: {
            listType : 'thumb',
            page : page,
            sort : 'last_update',
            sort_type : 'DESC'
    }});
    if(response.ok){
        //get phan trang
        let gtext = response.text();
        var page = gtext.match("page = '(.+)'")[1]
        var last_page = gtext.match("last_page = '(.+)'")[1]
        var slug_type = gtext.match("slug_type = '(.+)'")[1]
        var token = gtext.match('_token = "(.+)"')[1]
        let gpage = fetch("https://truyengihotne.com/frontend_controllers/list/pagi.php", {
            method : "POST",
            body : {
                "action": "manga_pagi",
                "token": token,
                "lastpage": last_page,
                "page": page,
                "slug_type": slug_type
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
                cover: item.select('.thumb').attr('style').split(/['']/)[1],
                description: 'Chap '+item.select('.chapter-link').last().text(),
                host: "https://truyengihotne.com"
            })
        });
        return Response.success(list,next)
    }
    return null;
}