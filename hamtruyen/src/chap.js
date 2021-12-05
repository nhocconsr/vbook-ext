function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var imgs = [];
        doc.select(".list-images img").forEach(e => imgs.push(e.attr("src")));
        return Response.success(imgs);
    }
    return null;
}