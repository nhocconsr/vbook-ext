function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html()
        return Response.success({
            name: doc.select(".infotitle h1").text(),
            cover: doc.select(".img_in img").first().attr('data-original'),
            author: doc.select(".username a").first().text(),
            description: doc.select("#aboutbook").text(),
            detail: doc.select(".infonum ul li").html(),
            ongoing: doc.select(".infotitle").first().text().indexOf("连载中") != -1,
            host: "http://www.23shu.com"
        });
    }
    return null
}