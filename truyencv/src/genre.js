function execute() {
    const doc = Http.get("https://m.truyencv.vn/the-loai").html();
    const el = doc.select(".css-5kov97 .css-1t29t6p a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split('/')[2],
           script: 'next.js'
        });
    }
    return Response.success(data);
}