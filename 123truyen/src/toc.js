function execute(url) {
    var doc = Http.get(url).html();
    var lastc = doc.select(".l-chapters .chapter-text").get(0).text().split(' ')[1];
    const data = [];
    for (var i = 1; i <= lastc; i++) {
        data.push({
            name: "Chương " + i,
            url: url+'/chuong-'+i,
            host: "https://123truyen.com"
        })
    }

    return Response.success(data);
}