function execute() {
    const json = Http.get("https://truyendich.org/secure/categories?per_page=1000").string();
    const el = JSON.parse(json);
    var es = el.pagination.data;
    const data = [];
    for (var i = 0; i < es.length; i++) {
        var e = es[i];
        data.push({
           title: e['name'],
           input: e['slug'],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}