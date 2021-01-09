function execute(url, page) {
    if (!page) page = '0';
    const pageitem = 97;
    const json = Http.post(url).body(JSON.stringify({
        "language":"Any",
        "sortType":"Name",
        "sortAsc":true,
        "searchAfter":page,
        "count":pageitem
    })).string();
    var data = JSON.parse(json);
    var novel_list = data.items;
    const list = [];
    for (var i = 0; i < novel_list.length; i++) {
        var novel = novel_list[i]
        list.push({
            name: novel['name'],
            link: 'novel/'+novel['slug'],
            cover: novel['coverUrl'],
            description: 'Chương '+ novel['chapterCount'],
            host: "https://www.wuxiaworld.com"
        })
    }
    return Response.success(list)
}