function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://b.faloo.com/y_'+url+'_'+page+'.html').html();

    var next = doc.select(".pageliste_body").select("span + a").first().attr('href').split('_').pop().split('.')[0];

    const el = doc.select("#BookContent .TwoBox02_02")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var blink = e.select("h1 a").first().attr("href");
        if (blink.startsWith("//")) {
            blink = "https:" + blink;
        }
        data.push({
            name: e.select("h1 a").first().text(),
            link: blink,
            cover: e.select("img").first().attr("src"),
            description: e.select(".TwoBox02_09 a").text(),
            host: 'https://b.faloo.com',
        })
    }

    return Response.success(data,next)
}