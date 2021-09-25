function execute(url, page) {
    if(!page) var page = '1';
    var doc = Http.get('https://www.linovel.net/cat/'+url+'.html').params({
        sort : 'updates',
        sign : '1',
        page : page
    }).html()
    var next = doc.select('.pagination').select('li.active + li').text()
    var allBook = doc.select('.rank-book-list .rank-book')
    if (doc){
        var list = [];
        for (var i in allBook){
            var book = allBook[i]
            list.push({
                name: book.select(".book-info a").first().text(),
                link: book.select(".book-info a").first().attr("href"),
                cover: book.select(".book-cover img").first().attr("src"),
                description: book.select(".book-extra").text().split(' 丨')[0],
                host: "https://www.linovel.net"
            })
        }
        return Response.success(list,next)
    }
    return Response.error(doc)
}