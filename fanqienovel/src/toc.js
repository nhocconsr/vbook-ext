function execute(url) {
    const reader = 'https://fanqienovel.com/reader/';
    const idBook = url.match(/\d+/)[0];
    const json = Http.get('https://fanqienovel.com/api/reader/directory/detail').params({bookId: idBook}).string();
    if (json) {
        var allChap = JSON.parse(json).data.chapterListWithVolume;
        const list = [];
        for(var book in allChap){
            for (var chapter in allChap[book]){
                var item = allChap[book][chapter];
                list.push({
                    name: item['title'],
                    url: reader+item['itemId'],
                    host: "https://fanqienovel.com"
                })
            }
        }
        return Response.success(list);
    }
    return Response.success(Burl)
}