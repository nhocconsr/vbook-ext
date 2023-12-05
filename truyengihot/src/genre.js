load('config.js')

function execute() {
    let doc = fetch(BASE_URL + "/index.html").html();
    //#tagWrapper > div.contentWidget > div:nth-child(4) > div.tagsContent
    let el = doc.select("div:nth-child(4) > div.tagsContent a");
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