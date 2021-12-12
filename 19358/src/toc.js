function execute(url) {
    let doc =fetch(url+'/').html();
    let el = doc.select('#list-chapterAll a')
    let data = [];
    el.forEach(e =>
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: "https://www.19358.net"
        }))
    return Response.success(data);
}