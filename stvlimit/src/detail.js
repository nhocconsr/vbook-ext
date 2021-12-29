function execute(url) {
    const doc = Http.get(url+'/').html();
    var author = doc.html().match(/Tác giả:.*?\s+(.*?)\s*</);
    if (author) author = author[1];
    var des = doc.select(".blk:has(.fa-water) .blk-body").html();
    var des = des.replace('www.uukanshu.com','');
    var des = des.replace('https://www.uukanshu.com','');
    var _detail = 'Tên gốc : '+doc.select("#oriname").text()+'<br>'+ doc.select(".blk:has(.fa-info-circle) > div:nth-child(4)").text()+'<br>'+doc.select(".blk:has(.fa-info-circle) > div:nth-child(3)").text();
    return Response.success({
        name: doc.select("#book_name2").first().text(),
        cover: doc.select(".container:has(#book_name2) img").first().attr("src") || 'https://i.imgur.com/KP0Z6Eh.png',
        author: author || 'Unknow',
        description: des,
        detail: _detail,
        ongoing: true,
        host: "https://sangtacviet.xyz"
    });
}