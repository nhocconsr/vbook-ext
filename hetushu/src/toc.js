function execute(url) {
    const doc = Http.get(url.replace('m.','www.')).html();
    var el = doc.select('#dir dd a')
    const data = [];
    el.forEach(e => {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: "https://www.hetushu.com"
        })
    });
    return Response.success(data);
}