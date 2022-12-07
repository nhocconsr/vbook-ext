function execute(url, page) {
    const uPic = 'https://p3-tt.byteimg.com/img/';
    if (!page) page = '0';
    var json = Http.get('https://fanqienovel.com/api/rank/category/list')
        .params({
            app_id: 1967,
            rank_list_type: 3,
            offset: page,
            limit: 15,
            category_id: url,
            rank_version: '',
        })
        .string();
    if(json){
        var data = JSON.parse(json).data
        var allBook = data.book_list
        const book = [];
        for (var i = 0; i < allBook.length; i++) {
            var item = allBook[i]
            book.push({
                name: item['bookName'],
                link: "https://fanqienovel.com"+ '/page/'+item['bookId'],
                cover: uPic+item['thumbUri']+'~180x234.jpg',
                description: item['author'],
                host: "https://fanqienovel.com"
            })
        }
        var next = parseInt(page) + 15;
        return Response.success(book, next.toString())      
    }
    return null;
}