function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select("ul._chapter li a").forEach(e => data.push({
            name: e.select("a").text(),
            url: url+'/'+e.attr("href"),
            host: "http://www.230book.net"
        }));
        return Response.success(data);
    }
    return null;
}