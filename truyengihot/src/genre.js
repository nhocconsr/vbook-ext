function execute() {
    let doc = fetch("https://truyengihotne.com/truyen-tranh.html").html();
    let el = doc.select("#list_genres a");
    let data = [];
    for (let i = 1; i < el.size() - 1; i++) {
        let e = el.get(i);
        let link = e.attr('href');
        data.push({
           title: e.text(),
           input: link.substring(link.indexOf('loai-')+5,link.indexOf(".html")),
           script: 'source.js'
        });
    }
    return Response.success(data);
}