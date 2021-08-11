function execute(url, page) {
    if (!page) page = '1';
    const json = Http.get('https://truyentienhiep.net/Group/Pagination?groupCode='+url+'&pageSize=20&pageNumber='+page)
    .string();
    var data = JSON.parse(json);

    var chapList = data.items;
    const list = [];
    for (var i = 0; i < chapList.length; i++) {
        var chap = chapList[i]
        list.push({
            name: chap['name'],
            link: "doc-truyen-"+chap['code'],
            cover: chap['image'],
            description: chap['author'],
            host: "https://truyentienhiep.net"
        })
    }
    var next = parseInt(page) + 1;
    return Response.success(list, next.toString())
}