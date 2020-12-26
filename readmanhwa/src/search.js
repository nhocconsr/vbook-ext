function execute(key, page) {
    if (!page) page = '1';
    const json = Http.get('https://readmanhwa.com/api/comics').params({
        page: page,
        q : key,
        sort: 'uploaded_at',
        order: 'desc',
        duration: 'day',
        nsfw: false,
    }).string();

    var allData = JSON.parse(json);
    var next = allData['next_page_url'].split('=')[1];
    var chapList = allData.data;
    const list = [];
    for (var i = 0; i < chapList.length; i++) {
        var chap = chapList[i]
        list.push({
            name: chap['title'],
            link: chap['slug'],
            cover: chap['thumb_url'],
            description: 'Chap '+chap['chapters_count'],
            host: "https://readmanhwa.com/en/webtoon"
        })
    }


    return Response.success(list, next)
}