function execute(url) {
    const slug = url.split('/')[4];
    var doc = fetch('https://hotruyen.com/muc-luc-sv/'+slug).html();
    var el = doc.select(".chapter")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.select('a').attr('href').replace('..',''),
            host: "https://hotruyen.com"
        })
    }
    return Response.success(data);
}