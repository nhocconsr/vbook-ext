function execute() {
    const doc = Http.get("https://www.hetushu.com/book/index.php").html();
    const el = doc.select(".catalog dd a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.text(),
           script: 'source.js'
        });
    }
    return Response.success(data);
}