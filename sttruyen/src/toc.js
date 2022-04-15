function execute(url) {
    let doc = fetch(url).html();
    let lastChap = doc.select("#readMore").attr('onclick').match(/\d+/);
    let data = [];
    for(var v = 1; v <= lastChap ; v++){
        data.push({
            name: 'Chương ' + v,
            url: url.replace('story','render') + '/chuong-'+ v,
            host: "https://sttruyen.com"
        })
    }

    return Response.success(data);
}