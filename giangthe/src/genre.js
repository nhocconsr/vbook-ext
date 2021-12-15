function execute() {
    const doc = Http.get("https://giangthe.com/tim-kiem-truyen").html();
    const el = doc.select("#category button");
    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('data-t'),
           script: 'source.js'
        });
    }
    return Response.success(data);
}