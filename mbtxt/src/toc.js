function execute(url) {
    let response = fetch(url+'/');
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select("#list-chapterAll a").forEach(e => data.push({
            name: e.text(),
            url: url+'/'+e.attr('href'),
            host: "https://www.mbtxt.com"
        }));
        return Response.success(data);
    }
    return null;
}