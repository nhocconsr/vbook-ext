function execute() {
    const doc = Http.get("https://m.ac.qq.com/category/index").html();
    const el = doc.select(".category-normal-item a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text().replace('| ',''),
           input: e.attr('href').split(/[=&]/)[1],
           script: 'gen.js'
        });
    }
    return Response.success(data);
}