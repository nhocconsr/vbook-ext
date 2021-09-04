function execute(url) {
    const idBook = url.match(/\d+$/)[0];
    const json = Http.get('https://idruid.webnovel.com/app/api/book/get-chapters?bookId='+idBook+'&maxUpdateTime=0&maxIndex=0&sign=').string();
    if (json) {
        var allChap = JSON.parse(json).Data.Chapters;
        const list = [];
        for(var x in allChap){
            var book = allChap[x];
            list.push({
                name: book.Name,
                url: idBook+'/'+book.Id,
                host: "https://www.webnovel.com"
            })
        }
        return Response.success(list);
    }
    return Response.success(json)
}