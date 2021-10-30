function execute(url) {
    var doc = Http.get(url).html();
    var check_lock = doc.select('#wrap_alertvip').text().indexOf("Chương này đã bị khóa") != -1;
    var data = [];
    if (check_lock === true){
        var img = doc.select('#wrap_alertvip').select('img').attr('src');
        data.push('https://hamtruyen.vn'+img)
    }else{
        var el = doc.select("#content_chap img");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push(e.attr("src"));
        }
    }
    return Response.success(data);
}