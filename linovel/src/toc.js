function execute(url) {
    const doc = Http.get(url+'#catalog').html();
    var vols = doc.select(".section-list .section");
    const data = [];
    for (var i = 0; i < vols.size(); i++) {
        var vol = vols.get(i);
        var achap = vol.select('.chapter a')
        var nvol = vol.select('.volume-title').text()
        achap.forEach( e => data.push({
                name: nvol + ' : ' + e.text(),
                url: e.attr("href"),
                host: "https://www.linovel.net"
            }))
    }
    return Response.success(data);
}