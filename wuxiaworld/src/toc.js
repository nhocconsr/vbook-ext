function execute(url) {
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    var doc = Http.get(url).html();

    var el = doc.select("ul.list-chapters li").select("a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: capitalize(e.text()),
            url: e.attr("href"),
            host: "https://www.wuxiaworld.com"
        })
    }

    return Response.success(data);
}