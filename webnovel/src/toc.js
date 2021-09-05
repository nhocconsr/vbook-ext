function execute(url) {
    const idBook = url.match(/\d+$/)[0];
    var doc = Http.get('https://www.webnovel.com').cookie();
    const csrfToken =  doc.match( /_csrfToken=([^;]+);/ )[1];
    var json = Http.get('https://www.webnovel.com/go/pcm/chapter/get-chapter-list').params({
        _csrfToken : csrfToken,
        bookId : idBook
    }).string();
    if (json) {
        const list = [];
        var allChap = JSON.parse(json).data.volumeItems; 
        for(var x in allChap){
            var vol = allChap[x].chapterItems;
            for (var y in vol){
                var book = vol[y]
                list.push({
                name: book.chapterName,
                url: idBook+'/'+book.chapterId,
                host: "https://www.webnovel.com"
            })
            }
        }
        return Response.success(list);
    }
    return Response.success(json)
}