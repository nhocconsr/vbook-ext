function execute(url) {
    const doc = Http.get(url+'/').html('gbk');
    var el = doc.select('#list-chapterAll a')
    const data = [];
    el.forEach(e => {
        data.push({
            name: e.text(),
            url: url+'/'+e.attr('href'),
            host: "https://www.mbtxt.com"
        })
    });
    return Response.success(data);
}