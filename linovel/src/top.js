
function execute(url, page) {
    if(!page) var page = '1';
    var json = Http.get('https://www.linovel.net/hub/getTopBooks?unit='+url+'&time=week&page='+page).string()
    var allBook = JSON.parse(json).data.books
    var next = (parseInt(page)+1).toString()
    if (allBook.length === 0) var next = null
    if (allBook){
        var list = [];
        for (var i in allBook){
            var book = allBook[i]
            list.push({
                name: book.name,
                link: 'https://www.linovel.net/book/'+book.id+'.html',
                cover: book.coverUrl,
                description: book.author,
                host: "https://www.linovel.net"
            })
        }
        return Response.success(list,next)
    }
    return Response.success(allBook)
}