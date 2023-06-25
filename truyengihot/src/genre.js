load('config.js')
function execute() {
    let doc = fetch(BASE_URL+"/index.html").html();
    let el = doc.select("#list_tag a");
    let data = [];
    for (let i = 1; i < el.size() - 1; i++) {
        let e = el.get(i);
        let link = e.attr('href');
        data.push({
           title: e.text(),
           input: link.split('tag_add=').pop(),
           script: 'source.js'
        });
    }
    return Response.success(data);
}