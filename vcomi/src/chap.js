function execute(url) {
    var base_url = 'https://vcomi.co/';
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-content img");
    var data = [];
    el.forEach(e => {
        var e = el[i];
        var img = base_url+e.attr("data-original").replace(/[\r\n]/g,'')
        data.push(img)   
    });
    return Response.success(data);
}