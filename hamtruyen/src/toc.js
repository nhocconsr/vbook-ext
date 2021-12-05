function execute(url) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let doc = fetch(url.replace('m.','www.')).html();
    let el = doc.select(".chap-item .name").select("a");
    let data = [];
    for (let i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: cap(e.text()),
            url: e.attr("href"),
            host: "https://hamtruyen.vn"
        })
    }
    return Response.success(data);
}