function execute(url, page) {
    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
    if (!page) page = '1';
    const doc = Http.get(url + '/danhsach/P'+ page +'/index.html?sort=3').html();
    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select("ul.listtruyen li > .item_truyennendoc");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: capitalize(e.select("h5.tentruyen_slide").first().text()),
            link: e.select("a").first().attr("href"),
            cover: e.select(".wrapper_imgage img").first().attr("src"),
            description: capitalize(e.select("h5.tenchap_slide").first().text()),
            host: "https://hamtruyen.vn"
        })
    }

    return Response.success(data, next)
}