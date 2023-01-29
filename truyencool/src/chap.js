function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let content = doc.select('.reading-content .text-left').text()
        if (content) {
            return Response.success(doc.select(".reading-content .text-left").html().replace(/&nbsp;/g, ""));
        } else {
            let imgs = [];
            doc.select(".reading-content img").forEach(e => {
                var imgUrl = e.attr("src")
                    .replace(/[\t\n]/g,'')
                    .replace(/\?data=.*/,'');
                imgs.push(imgUrl);
            });
            return Response.success(imgs);    
        }
    }
    return null;
}