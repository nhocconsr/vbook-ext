function execute(url, page) {
	if(!page) page = "1"
    var listBook = []
    var newUrl = "https://truyenwki.com/wp-admin/admin-ajax.php"
    if(url.indexOf("https")==-1){
        var the_loai = url.split(" ")[0]
        var option_keyword_tax = url.split(" ")[1]

        var action = "load_more_page_keyword"
        var doc = Http.post(newUrl)
        .params({
            "action" : action,
            "the_loai" : the_loai,
            "current_page_tax" : page,
            "option_keyword_tax" : option_keyword_tax
        }).html()
    }
    else{
        var action = "load_more_tax"
        var term_slug = url.match(/keyword\/(.+)/)[1]
        var doc = Http.post(newUrl)
        .params({
            "action" : action,
            "current_page_tax" : page,
            "term[slug]": term_slug,
        }).html()
    }
    var books = doc.select("li")
    books.forEach(book => listBook.push({
        name: book.select("a").attr("title"),
        link: book.select("a").attr("href"),
        cover: book.select("img").attr("src"),
        description: book.select("p.crop-text-2").text(),
        host: "https://truyenwki.com"
    }))

    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
    
}