function execute() {
    const doc = Http.get("https://hentaivn.vip").html();
    const el = doc.select('ul.genre li a');
    const data = [];
    el.forEach(e =>data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        })
    )
    return Response.success(data);
}