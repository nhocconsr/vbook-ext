function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select('.swiper-wrapper img');
    var list = []
    for(var i in el){
        var e = el[i]
        list.push(e.attr('data-src'))
    }
    return Response.success(list)
}