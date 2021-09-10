function execute(url, page) {
    if (!page) page = '1';
    var json = Http.get('https://webapi.gongzicp.com/novel/novelGetList')
        .params({
            page : page,
            tid : url
        }).string();
    if (JSON.parse(json).code = 200){
        var next = (parseInt(page) + 1).toString()
    }
    if(json){
        var data = JSON.parse(json).data
        var allBook = data.list
        const book = [];
        for (var i in allBook) {
            var item = allBook[i]
            book.push({
                name: item.novel_name,
                link: '/novel-'+item.novel_id+'.html',
                cover: item.novel_cover,
                description: item.novel_author,
                host: "https://www.gongzicp.com"
            })
        }
        return Response.success(book, next)      
    }
    return null;
}