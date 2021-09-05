function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get('https://www.webnovel.com').cookie();
    const csrfToken =  doc.match(/_csrfToken=([^;]+);/)[1];
    var json = Http.get('https://www.webnovel.com/go/pcm/category/categoryAjax').params({
        _csrfToken: csrfToken,
        pageIndex: page,
        categoryId: '0',
        categoryType: '1',
        bookStatus: '0',
        orderBy: url
    },).string();
    const allItem = JSON.parse(json).data.items;
    var list = [];
    for (var x in allItem){
        var item =  allItem[x];
        list.push({
            name: item.bookName,
            link: '/book/'+item.bookId,
            cover: 'https://img.webnovel.com/bookcover/'+item.bookId+'/600/600.jpg',
            description: item.authorName,
            host: "https://www.webnovel.com"
        })
    }
    var next = parseInt(page) + 1
    return Response.success(list,next.toString())
}