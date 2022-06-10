function execute(url) {
    const doc = Http.get("https://truyenmoii.com/").html()
    var firstList = doc.select("ul.dropdown-menu").first()
    var el = firstList.select('li a')
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