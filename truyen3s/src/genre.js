function execute() {
    const doc = Http.get("https://truyen3s.com").html();
    const el = doc.select('.megamenu-list a');
    const data = [];
    el.forEach(e =>data.push({
           title: e.select('a').text(),
           input: e.attr('href'),
           script: 'gen.js'
        })
    )
    return Response.success(data);
}