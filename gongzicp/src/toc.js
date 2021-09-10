function execute(url) {
    const bookId = url.match(/\d+/)[0];
    Console.log(bookId)
    var json = Http.get('https://webapi.gongzicp.com/novel/chapterGetList?nid='+bookId).string();
    var allChap = JSON.parse(json).data.list;
    var list = [];
    for (var i in allChap){
        var book = allChap[i];
        if (book.type === 'item'){
            list.push({
                name: book.name,
                url: 'read/'+book.id,
                host: "https://www.gongzicp.com"
            })
        }    
    }
    return Response.success(list)
}