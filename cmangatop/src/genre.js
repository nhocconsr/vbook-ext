function execute() {
    const doc = Http.get("https://cmangatop.com").html();
    const el = doc.select(".book_tags_content a");
    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.text(),
           script: 'source.js'
        });
    }
    return Response.success(data);
}