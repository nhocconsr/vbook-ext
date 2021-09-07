function execute(url) {
    const bid = url.split('/').pop();
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    var doc = Http.get('https://www.tadu.com/book/catalogue/'+bid).html();
    var el = doc.select(".chapter").select("a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: capitalize(e.text()),
            url: e.attr("href"),
            host: "https://www.tadu.com"
        })
    }

    return Response.success(data);
}