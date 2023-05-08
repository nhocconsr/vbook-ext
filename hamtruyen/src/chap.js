function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        if (url.indexOf("doc-truyen-chu") > 0) {
            return Response.success(doc.select('.content-chap').text().replace(/[?\.]\s/g,'.<br>'))
        } else {
            let imgs = [];
            doc.select("#lst_content img").forEach(e => imgs.push(e.attr("data-original")));
            return Response.success(imgs);
        }
    }
    return null;
}