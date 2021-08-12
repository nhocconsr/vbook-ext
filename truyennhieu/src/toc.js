function execute(url) {
    const Mainurl = 'https://truyennhieu.com';
    var doc = Http.get(url).html();
    const bookId = doc.select("input[id=book-id]").first().attr("value");
    var json = Http.get('https://truyennhieu.com/ajax/books/'+bookId+'/read-chapter-menu').string();
    if (json) {
        var allChap = JSON.parse(json);
        const list = [];
        for (var i = 0; i < allChap.length ; i++){
            var chap = allChap[i];
            list.push({
                name: chap['name'],
                url: Mainurl +chap['link'],
                host: "https://truyennhieu.com"
            })
        }
        return Response.success(list);
    }
    return null;
}
