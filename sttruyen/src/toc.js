function execute(url) {
    var doc = Http.get(url).html();
    var lastChap = doc.select("#readMore").attr('onclick').split(/[-/]/);
    var lastChap = lastChap[lastChap.length-2];
    const data = [];
    for(var v = 1; v <= lastChap ; v++){
        data.push({
            name: 'Chương ' + v,
            url: url.replace('.html','') + '/chuong-'+ v,
            host: "https://sttruyen.com"
        })
    }

    return Response.success(data);
}