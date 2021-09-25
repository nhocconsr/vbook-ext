function execute(url) {
    const doc = Http.get(url+'#catalog').html();
    var vols = doc.select(".section-list .section");
    const data = [];
    for (var i in vols) {
        var vol = vols[i];
        Console.log(vol)
        var achap = vol.select('.chapter a')
        var nvol = vol.select('.volume-title').text()
        for(var x in achap){
            var e = achap[x];
            data.push({
                name: nvol + ' : ' + e.text(),
                url: e.attr("href"),
                host: "https://www.linovel.net"
            })
        }
    }
    return Response.success(data);
}