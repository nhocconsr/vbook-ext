function execute(url) {
    const doc = Http.post(url.replace('m.','www.') + '/dir.html').html();
    var el = doc.select(".mulu_list li a");
    const data = [];
    el.forEach(e => data.push({
        name: e.text(),
        url: e.attr("href"),
        host: "https://www.ptwxc.com"
    }));
    return Response.success(data);
}