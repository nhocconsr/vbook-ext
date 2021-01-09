function execute(url) {
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    var doc = Http.get(url).html();

    var el = doc.select(".content .tenChapter").select("a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: capitalize(e.text()),
            url: e.attr("href"),
            host: "https://hamtruyen.vn"
        })
    }

    return Response.success(data);
}