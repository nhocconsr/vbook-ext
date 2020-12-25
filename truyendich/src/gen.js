function execute(url, page) {
    if (!page) page = '1';
    const json = Http.get(url+'&page='+page).string()
    var data = JSON.parse(json);
	var next = data.pagination['next_page_url'].split('=')[1];

    var chapList = data.pagination.data;
    const list = [];
    for (var i = 0; i < chapList.length; i++) {
        var chap = chapList[i]
        list.push({
            name: chap['name'],
            link: "doc-truyen/"+chap['slug'],
            cover: chap['poster'],
            description: 'Chương '+chap['latest_chapter'],
            host: "https://truyendich.org"
        })
    }

    return Response.success(list, next)
}