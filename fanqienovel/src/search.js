function execute(key, page) {
    const uPic = 'https://p3-tt.byteimg.com/img/';
    if (!page) page = '0';
    var json = Http.get('https://fanqienovel.com/api/author/search/search_book/v1')
        .params({
            filter: '127,127,127',
            page_count : '18',
            page_index : page,
            query_type : 0,
            query_word : key
        })
        .string();
    Console.log(json)
    if(json){
        var data = JSON.parse(json).data
        var allBook = data.search_book_data_list
        const book = [];
        for (var i = 0; i < allBook.length; i++) {
            var item = allBook[i]
            book.push({
                name: item['book_name'],
                link: 'page/'+item['book_id'],
                cover: uPic+item['thumb_uri']+'~180x234.jpg',
                description: item['author'],
                host: "https://fanqienovel.com"
            })
        }
        var next = parseInt(page) + 15;
        return Response.success(book, next.toString())      
    }
    return null;
}