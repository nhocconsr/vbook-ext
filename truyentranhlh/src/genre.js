function execute() {
    const doc = Http.get("https://truyentranhlh.net").html();
    const el = doc.select(".no-gutters a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://truyentranhlh.net'+e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}