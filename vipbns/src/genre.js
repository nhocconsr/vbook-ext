function execute() {
    const json = Http.get("https://api.bachngocsach.vip/api/categories?per_page=24").string();
    const el = JSON.parse(json);
    var es = el.data;
    const data = [];
    for (var i = 0; i < es.length; i++) {
        var e = es[i];
        data.push({
           title: e['name'],
           input: e['id'],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}
