function execute(key, page) {
    if(!page) page = '1';
    var json = Http.get('https://tienvuc.com/api/search').params({
        search : key,
        page: page,
        limit:10
    }).string();
    var data = JSON.parse(json)
    if (json){
        var list = [];
        var allBook = data.docs;
        for (var i in allBook){
            var book = allBook[i];
            if(book.vip === true) var vip = "【Truyện VIP】 ";
            else var vip = '';
            list.push({
                name: book.name,
                link: book.slug,
                cover: book.cover.domain+'/'+book.cover.url,
                description: vip+book.author.name,
                host: 'https://tienvuc.com',
            })
        }
        return Response.success(list)
    }
}