function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select('.swiper-wrapper img');
    var list = []
    el.forEach(e => {
        list.push(e.attr('data-src'))
    });
    return Response.success(list)
}