function execute(url) {
    var doc = Http.get(url).html();
    var lastPage = doc.select('ul.pageNav-main li').last().text()
    const data = [];
    for (var i = 2; i <= lastPage; i++) {
        var name = i - 1;
        data.push({
            name: 'Chương '+ name,
            url: url + '/page-'+ i,
            host: "https://vietwriter.vn"
        })
    }
    return Response.success(data);
}