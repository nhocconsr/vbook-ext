function execute(url) {
    var slug = url.split('/')[4];
    const json = Http.get('https://truyendich.org/secure/items/show/'+slug).string()
    var book = JSON.parse(json);
    var allChap = book.item['latest_chapter'];
    const data = [];
    for (var i = 1; i <= allChap ; i++){
        data.push({
            name: 'Chương ' + i,
            url: url + '/' + i,
            host: "https://truyendich.org"
        })
    }
    return Response.success(data);
}