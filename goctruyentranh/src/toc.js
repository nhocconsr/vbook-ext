function execute(url) {
    var doc = Http.get(url).string();
    var bookId = doc.match(/comicId: \'(\d+)'/)[1];
    var json = JSON.parse(Http.get('https://goctruyentranh.com/api/comic/'+bookId+'/chapter?limit=-1').string())
    var allChap = json.result.chapters;
    const data = [];
    for (var i = allChap.length -1; i >= 0; i--) {
        var chap = allChap[i]
        data.push({
            name: '#'+ chap.numberChapter +' - '+ chap.name,
            url: url + '/chuong-'+chap.numberChapter,
            host: "https://goctruyentranh.com"
        })
    }
    return Response.success(data)
}