function execute() {
    const doc = Http.get("https://www.webtoon.xyz").html();
    const el = doc.select("#menu-item-945 ul > li a");
    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}