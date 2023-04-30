function execute(url) {
    let last_chapter = fetch(url).html().select('#readMore').attr('onclick').split('-').pop().replace("'",'');
    let baseChap = url.replace('story','render');
    let list = [];
    for(var i = 1;i <=last_chapter;i++){
        list.push({
            name: `Chương ${i}`,
            url: `${baseChap}/chuong-${i}`,
            host: "https://sttruyen.com"
        })
    }
    return Response.success(list);
}