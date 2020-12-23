function execute() {
    const doc = Http.get("https://manhwahentai.me/webtoon/").html();
    const el = doc.select(".sidebar-col ul.list-unstyled > li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}