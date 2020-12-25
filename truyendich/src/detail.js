function execute(url) {
    var slug = url.split('/')[4];
    const json = Http.get('https://truyendich.org/secure/items/show/'+slug).string()

    var data = JSON.parse(json);
    var detail = data.item
    return Response.success({
        name: detail['name'],
        cover: detail['poster'],
        author: 'Tác giả: '+detail['authors'][0]['name'],
        description: detail['description'],
        detail: 'Thể loại: '+ detail['categories'][0]['name'],
        host: "https://truyendich.org",
    });
}