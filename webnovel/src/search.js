function execute(key, page) {
    if(!page) page = '1';
    var doc = Http.get('https://www.webnovel.com').cookie();
    const csrfToken =  doc.match(/_csrfToken=([^;]+);/)[1];
    var json = Http.get('https://www.webnovel.com/go/pcm/search/result').params({
        _csrfToken: csrfToken,
        pageIndex: page,
        type: '1',
        keywords: key,
    },).string();
    const allItem = JSON.parse(json).data.bookInfo.bookItems;
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