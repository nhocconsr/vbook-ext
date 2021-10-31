function execute() {
    const doc = Http.get("https://vietwriter.vn/categories/truyen.5/").html();
    const el = doc.select('.node .node-title a');
    const data = [];
    el.forEach(e =>data.push({
           title: e.text(),
           input: 'https://vietwriter.vn' + e.attr('href'),
           script: 'gen.js'
        })
    )
    return Response.success(data);
}