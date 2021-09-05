function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get('https://www.webnovel.com').cookie();
    const csrfToken =  doc.match(/_csrfToken=([^;]+);/)[1];
    var json = Http.get('https://www.webnovel.com/go/pcm/category/getRankList').params({
        _csrfToken: csrfToken,
        pageIndex: page,
        rankId: url,
        listType: '3',
        type: '1',
        timeType: '3',
        sourceType: '2'
    },).string();
    const allItem = JSON.parse(json).data.bookItems;
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