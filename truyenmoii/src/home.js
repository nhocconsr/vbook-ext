function execute(url) {
    const doc = Http.get("https://truyenmoii.com/").html()
    el = doc.select("ul.dropdown-menu li a")
    const data = []
    for (var i = 0; i < 4; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js',
        })
    }
    return Response.success(data)
}