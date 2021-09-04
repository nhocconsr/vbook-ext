function execute(url) {
    const bookId = url.match(/\d+$/)[0];
    Console.log(bookId)
    const json = Http.get('https://idruid.webnovel.com/app/api/book/get-book').params({
        bookId:bookId
    }).string();
    var detail = JSON.parse(json).Data
    return Response.success({
        name: detail.BookName,
        cover: 'https://img.webnovel.com/bookcover/'+bookId+'/600/600.jpg',
        author: detail.AuthorInfo.AuthorName,
        description: detail.Description,
        detail: detail.CategoryName,
        host: "https://www.webnovel.com",
    })
}