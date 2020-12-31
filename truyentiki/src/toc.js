function execute(url) {
    var doc = Http.get(url + '/').html();
    var lastChap = doc.select("table > tbody > tr:nth-child(5) a").attr('href').split('/')[2].split('-')[1];
    const data = [];
    for(var v = 1; v <= lastChap ; v++){
        data.push({
            name: 'Chương ' + v,
            url: url + '/chuong-'+ v,
            host: "https://truyentiki.com"
        })
    }

    return Response.success(data);
}