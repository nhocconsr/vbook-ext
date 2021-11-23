function execute(url, page) {
    if (!page) page = '1';
    const json = Http.post('https://www.tsumino.com/Search/Operate/?type='+url).params({
        'PageNumber': page,
        'Sort': 'Newest',
        'List': '0',
        'Length': '0',
        'MinimumRating': '0',
        'ExcludeList': '0',
        'CompletelyExcludeHated': false,
    }).string();
    var allPage = JSON.parse(json).pageCount;
    if (parseInt(page) < allPage) var next = (parseInt(page) + 1).toString();
    else var next = null
    var allBook = JSON.parse(json).data;
    var list = [];
    allBook.forEach(book => {
        list.push({
            name: book.entry.title,
            link: '/entry/'+book.entry.id,
            cover: book.entry.thumbnailUrl,
            description: book.impression,
            host: "https://www.tsumino.com"
        })
    });
    return Response.success(list,next)
}