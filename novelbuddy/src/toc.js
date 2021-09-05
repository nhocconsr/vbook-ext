function execute(url) {
    var nUrl = url.split('/').pop();
    var doc = Http.get('https://novelbuddy.com/api/novels/'+nUrl+'/chapters').html();
    var el = doc.select(".chapter-select option")
    const data = [];
    for (var i = 0;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("value"),
            host: "https://novelbuddy.com"
        })
    }

    return Response.success(data);
}