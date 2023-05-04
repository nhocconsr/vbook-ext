function execute(url) {
    var doc = fetch(url).html();
    var imgs = []
    content = doc.select('.reading-detail img')
        .forEach(e => {
            let img = e.attr("src");
            if(img.indexOf('top.jpg') == -1)
                imgs.push(img)
        });
    return Response.success(imgs);

}