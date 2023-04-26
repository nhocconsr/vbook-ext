function execute(url) {
    url = url.replace("khotruyentranhz.com","khotruyentranhonline.com")
    url = url.replace("khotruyentranhhot.com","khotruyentranhonline.com")
    var doc = fetch(url).html();
    var el = doc.select(".box-chapter-content img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("src"));
    }
    return Response.success(data);
}