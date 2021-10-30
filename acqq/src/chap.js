function execute(url) {
    var browser = Engine.newBrowser()
    browser.launch(url, 10000)
    var doc = browser.html() 
    browser.close()
    var el = doc.select(".comic-pic-list img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src");
        if (img.startsWith('//')) img = img.replace('//','https://');
        data.push(img);
    }
    return Response.success(data);
}
