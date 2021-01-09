function execute() {
    const doc = Http.get("https://hamtruyen.vn").html();
    const el = doc.select(".wrapper_list_theloai a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://hamtruyen.vn'+e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}