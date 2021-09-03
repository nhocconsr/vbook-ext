function execute(url) {
    const bookId = url.match(/\d+/)[0];
    var doc = Http.post('https://www.ciweimao.com/chapter/get_chapter_list_in_chapter_detail').params({book_id: bookId}).html();
    var el = doc.select("ul.book-chapter-list li a")
    const list = [];
    for (var i= 0; i < el.size(); i++) {
        var e = el.get(i);
        var lock = e.html().match('icon-lock');
        if(lock != null){
            var vip = '/vip';
        }else{var vip = ''}
        list.push({
            name: e.text(),
            url: e.attr("href")+vip,
            host: "https://www.ciweimao.com"
        })
    }
    return Response.success(list);
}