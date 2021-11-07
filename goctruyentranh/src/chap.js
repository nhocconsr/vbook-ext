function execute(url) {
    var doc = Http.get(url).html();
    var check_lock = doc.select('#wrap_alertvip').text().indexOf("Chương này đã bị khóa") != -1;
    var data = [];
    if (check_lock === true){
        data.push('https://goctruyentranh.com/image/banner/1MP6UdYiZZYDE4AEDsbnoFJKrbnkghsWN')
    }else{
        var el = doc.select(".view-section .viewer img");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push(e.attr("src"));
        }
    }
    return Response.success(data);
}