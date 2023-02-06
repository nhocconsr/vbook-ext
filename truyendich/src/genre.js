function execute() {
    let doc = fetch("https://www.truyendichh.com").html();
    let el = doc.select(".menu-show-full-cate li a");
    const data = [];
    for (var i = 0; i < el.size() - 3; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split('/').pop(),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}