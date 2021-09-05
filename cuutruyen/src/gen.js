function execute(url, page) {
    var reHost = 'https://cuutruyen.net/mangas/';
    if (!page) page = 1; 
    var json = Http.get('https://cuutruyen.net/api/v1/mangas?').params({
        'page\[number\]': page,
        'filter\[status\]': 'processed',
        sort: url,
        'stats\[total\]': 'count'
    }).string();
    var book = JSON.parse(json);
    var allPage = Math.round(book.meta.stats.total.count/20);
    var next = "";
    if (parseInt(page) < allPage) {
        next = parseInt(page) + 1;
    }
    var bookList = [];

    if (book.data) {
        bookList = book.data.map(item => {
            return {
                "name": item.attributes.name,
                "link": reHost + item.id,
                "description": 'Chap '+item.attributes.newest_chapter_number,
                "cover": item.attributes.cover_url,
                "host": "https://cuutruyen.net"
            }
        });
        return Response.success(bookList,next.toString());
    }
    return Response.success(json);
}   